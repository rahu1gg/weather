'use client';

import { dispatch, useAppSelector } from '@/client/store';
import { setplaces } from '@/client/store/slices/client-slice';
import { Skeleton } from '@/components/ui/skeleton';
import { LocateFixed, MapPin, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, Fragment, useEffect, useState } from 'react';
import { redirectToCurrentLocation } from '../home/actions';
import { getPlaces } from './actions';

export function LocationInput() {
	const { places } = useAppSelector((state) => state.clientSlice).header;
	const [location, setLocation] = useState('');

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	useEffect(() => {
		if (location.length === 0) {
			dispatch(setplaces({ loading: false, showPlaces: false, value: [] }));
			return;
		}
		const timeoutId = setTimeout(async () => {
			const { data, showPlaces, success } = await getPlaces({ location });
			if (success) {
				dispatch(setplaces({ loading: false, showPlaces, value: data }));
			}
		}, 750);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [location]);

	return (
		<Fragment>
			<form onSubmit={handleSubmit} className='w-full relative'>
				<label
					htmlFor='location-input'
					className={`flex items-center justify-start relative bg-muted/40 py-3 px-5 rounded-t-2xl hover:cursor-pointer duration-300 ${
						places.loading || places.showPlaces ? 'rounded-b-none' : 'rounded-b-2xl'
					}`}
				>
					<Search size={18} />
					<input
						className='outline-none text-sm pl-4 pr-10 bg-transparent placeholder:text-muted-foreground placeholder:text-sm capitalize w-full'
						id='location-input'
						value={location}
						placeholder='Search city...'
						name='location'
						autoComplete='off'
						onChange={(e) => {
							setLocation(e.target.value);
							dispatch(setplaces({ loading: true }));
						}}
						onBlur={() => setTimeout(() => dispatch(setplaces({ showPlaces: false })), 500)}
						onFocus={() => location.length && dispatch(setplaces({ showPlaces: true }))}
					/>
				</label>
				<PlacesResponse />
			</form>
		</Fragment>
	);
}

function PlacesResponse() {
	const { places } = useAppSelector((state) => state.clientSlice).header;

	if (places.loading)
		return (
			<div className='absolute w-full top-full border-t border-border left-0 bg-[#151518] py-4 rounded-b-2xl shadow-xl pointer-events-none'>
				{[1, 2, 3, 4, 5].map((_, index) => (
					<div key={`${index}`}>
						<div className='flex items-center justify-start gap-4 py-3 px-4 duration-200 hover:bg-muted pointer-events-auto'>
							<span>
								<MapPin className='text-muted-foreground' />
							</span>
							<div className='w-full'>
								<Skeleton className='h-4 w-full' />
								<Skeleton className='h-3 mt-1 w-full' />
							</div>
						</div>
					</div>
				))}
			</div>
		);

	if (places.showPlaces && places.value?.length === 0)
		return (
			<div className='absolute w-full top-full border-t border-border left-0 bg-[#151518] py-4 rounded-b-2xl shadow-xl pointer-events-none'>
				<p className='text-muted-foreground text-center text-sm'>No Places</p>
			</div>
		);

	if (!places.showPlaces) return null;

	return (
		<div className='absolute w-full top-full border-t border-border left-0 bg-[#151518] py-4 rounded-b-2xl shadow-xl pointer-events-none'>
			{places.value?.map((val, index) => (
				<div key={`${index}`}>
					<Link
						href={`/?lat=${val.lat}&lon=${val.lon}`}
						className='flex items-center justify-start gap-4 py-3 px-4 duration-200 hover:bg-muted pointer-events-auto'
						onClick={() => dispatch(setplaces({ showPlaces: false }))}
					>
						<span>
							<MapPin className='text-muted-foreground' />
						</span>
						<div>
							<p className='text-sm'>{val.name}</p>
							<p className='text-xs text-muted-foreground'>
								{val.state} {val.country}
							</p>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export function CurrentLocation() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	function handleClick() {
		setLoading(true);
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					console.log('Latitude is :', position.coords.latitude);
					console.log('Longitude is :', position.coords.longitude);
					// server-action to redirect to the nearest-location
					const res = await redirectToCurrentLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
					console.log(res);
					if (res.success) {
						router.push(`/?lat=${res.data![0].lat}&lon=${res.data![0].lon}`);
					}
					setLoading(false);
				},
				(error) => {
					console.error(`Error Code = ${error.code} - ${error.message}`);
				},
				{
					enableHighAccuracy: true,
				},
			);
		} else {
			// TODO: toast when geolocation is not available
			console.log('Not Available');
			setLoading(false);
		}
	}
	return (
		<button
			type='button'
			className='flex items-center justify-center gap-3.5 bg-pink-400 hover:bg-pink-400/90 rounded-full h-10 px-4 text-background text-sm'
			onClick={handleClick}
		>
			{loading ? (
				<span className='w-5 h-5 bg-transparent border border-t-muted border-x-transparent border-b-transparent rounded-full animate-loader-rotate' />
			) : (
				<LocateFixed size={20} />
			)}
			<span className='font-semibold'>Current Location</span>
		</button>
	);
}
