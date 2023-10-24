'use client';

import { LocateFixed, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, Fragment, useEffect, useState } from 'react';
import { redirectToCurrentLocation } from '../home/actions';
import { getPlaces, type Places } from './actions';

export function LocationInput() {
	const [location, setLocation] = useState('');
	const [places, setPlaces] = useState<Places>([]);
	const [loading, setLoading] = useState(false);
	const [showPlaces, setShowPlaces] = useState(false);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	useEffect(() => {
		if (location.length === 0) return;
		const timeoutId = setTimeout(async () => {
			const res = await getPlaces({ location });
			console.log(res);
			if (res.success) {
				setPlaces(res.data);
				setShowPlaces(true);
			}
			setLoading(false);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [location]);

	function PlacesResponse() {
		if (!showPlaces) return null;

		return (
			<div className='absolute w-full top-full border-t border-border left-0 bg-[#151518] py-4 rounded-b-2xl shadow-xl pointer-events-none'>
				{places.map((val, index) => (
					<div key={`${index}`}>
						<Link
							href={`/?lat=${val.lat}&lon=${val.lon}`}
							className='flex items-center justify-start gap-4 py-3 px-4 duration-200 hover:bg-muted pointer-events-auto'
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

	return (
		<Fragment>
			<form onSubmit={handleSubmit} className='w-full relative'>
				<input
					className='outline-none text-sm pl-4 pr-10 bg-transparent placeholder:text-muted-foreground placeholder:text-sm capitalize w-full'
					id='location-input'
					value={location}
					placeholder='Search city...'
					name='location'
					autoComplete='off'
					onChange={(e) => {
						setLocation(e.target.value);
						setLoading(true);
					}}
				/>
				{loading && (
					<span className='absolute top-0 right-0 w-5 h-5 bg-transparent border border-t-muted-foreground border-x-transparent border-b-transparent rounded-full animate-loader-rotate' />
				)}
			</form>
			<PlacesResponse />
		</Fragment>
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
