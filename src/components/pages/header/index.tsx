import { DEFAULT_COORDINATES } from '@/constants/home';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { CurrentLocation, LocationInput } from './client';

export default function Header() {
	return (
		<header>
			<div className='py-6 max-w-maxi mx-auto flex items-center justify-between'>
				<div>
					<p>
						<Link href={`/?lat=${DEFAULT_COORDINATES.latitude}&lon=${DEFAULT_COORDINATES.longitude}`}>Weather 🌦️</Link>
					</p>
				</div>
				<div className='w-full max-w-lg'>
					<label
						htmlFor='location-input'
						className='flex items-center justify-start relative bg-muted/40 py-3 px-5 rounded-t-2xl hover:cursor-pointer'
					>
						<Search size={18} />
						<LocationInput />
					</label>
				</div>
				<div>
					<CurrentLocation />
				</div>
			</div>
		</header>
	);
}
