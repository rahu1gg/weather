import { store } from '@/client/store';
import { getCelcius } from '@/lib/utils/getCelcius';
import { getDate } from '@/lib/utils/getDate';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';
import { getWeather } from './api';

export default async function Article() {
	await getWeather();
	return (
		<Fragment>
			<CurrentWeather />
		</Fragment>
	);
}

function CurrentWeather() {
	const weather = store.getState().serverSlice.weather;

	if (!weather) return null;

	const { temperature, icon, description, dt, timezone, city, country } = weather;

	return (
		<div className='bg-muted/50 rounded-3xl p-8 w-full'>
			<h2 className='text-lg'>Now</h2>
			<div className='grid grid-cols-2 items-center justify-center py-3'>
				<p className='text-7xl leading-[1.1]'>
					{getCelcius(temperature)}&deg;
					<sup>c</sup>
				</p>
				<div className='text-center'>
					<Image src={`/weather-icons/${icon}.png`} className='w-20 relative left-3 inline-block' width={100} height={100} alt={description} />
				</div>
			</div>
			<p className='pb-3 pt-1 text-sm capitalize'>{description}</p>
			<hr className='border-t w-full border-muted' />
			<div className='pt-3 capitalize font-medium text-muted-foreground'>
				<div className='flex items-center justify-start gap-3'>
					<span>
						<Calendar size={18} />
					</span>
					<p className='text-muted-foreground text-sm'>{getDate(dt, timezone)}</p>
				</div>
				<div className='flex items-center justify-start gap-3 pt-2.5'>
					<span>
						<MapPin size={18} />
					</span>
					<p className='text-muted-foreground text-sm'>
						{city}, {country}
					</p>
				</div>
			</div>
		</div>
	);
}
