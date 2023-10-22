import { Search } from 'lucide-react';
import Link from 'next/link';
import { LocationInput } from './client';

export default function Header() {
	return (
		<header>
			<div className='py-6 max-w-maxi mx-auto flex items-center justify-between'>
				<div>
					<p>
						<Link href={'/'}>Weather</Link>
					</p>
				</div>
				<div className='w-full max-w-lg'>
					<label htmlFor='location-input' className='flex items-center justify-start bg-muted/40 py-3 px-4 rounded-full hover:cursor-pointer'>
						<Search size={18} />
						<LocationInput />
					</label>
				</div>
				<div>
					<p>Current Location</p>
				</div>
			</div>
		</header>
	);
}
