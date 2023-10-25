import { DEFAULT_COORDINATES } from '@/constants/home';
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
					<LocationInput />
				</div>
				<div>
					<CurrentLocation />
				</div>
			</div>
		</header>
	);
}
