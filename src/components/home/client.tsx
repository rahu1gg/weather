'use client';

import { Calendar, Droplets, Eye, MapPin, Sunrise, Sunset, ThermometerSun, Waves, Wind } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';

export function CurrentWeatherClient() {
	return (
		<Fragment>
			<div className='grid grid-cols-2 items-center justify-center py-3'>
				<p className='text-7xl leading-[1.1]'>
					25&deg;
					<sup>c</sup>
				</p>
				<div className='text-center'>
					<Image src='/weather-icons/04d.png' className='w-20 relative left-3' width={100} height={100} alt='status' />
				</div>
			</div>
			<p className='pb-3 pt-1 text-sm'>Description</p>
			<hr className='border-t w-full border-muted' />
			<div className='pt-3 capitalize font-medium text-muted-foreground'>
				<div className='flex items-center justify-start gap-3'>
					<span>
						<Calendar size={18} />
					</span>
					<p className='text-muted-foreground text-sm'>wednesday 1st, Mar</p>
				</div>
				<div className='flex items-center justify-start gap-3 pt-2.5'>
					<span>
						<MapPin size={18} />
					</span>
					<p className='text-muted-foreground text-sm'>New Delhi, IN</p>
				</div>
			</div>
		</Fragment>
	);
}

export function HourlyWeatherClient() {
	return (
		<Fragment>
			<div className='grid grid-cols-4 gap-5'>
				<div className='bg-background/40 rounded-2xl p-6 col-span-2'>
					<div className='flex items-center justify-between'>
						<h3 className='capitalize font-semibold text-muted-foreground'>air quality index</h3>
						<Wind size={20} />
					</div>
					<div className='grid grid-cols-4 grid-rows-1 pb-4 pt-8'>
						<div className='text-center'>
							<p className='text-muted-foreground text-sm'>PM25</p>
							<span className='text-2xl pt-1.5'>3.90</span>
						</div>
						<div className='text-center'>
							<p className='text-muted-foreground text-sm'>SO2</p>
							<span className='text-2xl pt-1.5'>3.90</span>
						</div>
						<div className='text-center'>
							<p className='text-muted-foreground text-sm'>NO2</p>
							<span className='text-2xl pt-1.5'>3.90</span>
						</div>
						<div className='text-center'>
							<p className='text-muted-foreground text-sm'>O3</p>
							<span className='text-2xl pt-1.5'>3.90</span>
						</div>
					</div>
				</div>

				<div className='col-span-2 bg-background/40 rounded-2xl p-6'>
					<div>
						<h3 className='capitalize font-semibold text-muted-foreground'>sunrise & sunset</h3>
					</div>
					<div className='grid grid-cols-2 pb-4 pt-8 gap-5'>
						<div>
							<div className='flex items-center justify-between'>
								<h3 className='capitalize font-medium text-sm text-muted-foreground'>sunrise</h3>
								<Sunrise size={18} />
							</div>
							<p className='text-2xl pt-1.5'>
								6:46 <span className='text-base'>AM</span>
							</p>
						</div>
						<div>
							<div className='flex items-center justify-between'>
								<h3 className='capitalize font-medium text-sm text-muted-foreground'>sunset</h3>
								<Sunset size={18} />
							</div>
							<p className='text-2xl pt-1.5'>
								6:46 <span className='text-base'>PM</span>
							</p>
						</div>
					</div>
				</div>

				<div className='bg-background/40 rounded-2xl p-6'>
					<div className='flex items-center justify-between'>
						<h3 className='capitalize font-semibold text-muted-foreground'>humidity</h3>
						<Droplets size={20} />
					</div>
					<p className='text-2xl pt-4 pb-2.5'>
						82<span className='text-base'>%</span>
					</p>
				</div>
				<div className='bg-background/40 rounded-2xl p-6'>
					<div className='flex items-center justify-between'>
						<h3 className='capitalize font-medium text-muted-foreground'>pressure</h3>
						<Waves size={20} />
					</div>
					<p className='text-2xl pt-4 pb-2.5'>
						1025<span className='text-base'>hPa</span>
					</p>
				</div>
				<div className='bg-background/40 rounded-2xl p-6'>
					<div className='flex items-center justify-between'>
						<h3 className='capitalize font-medium text-muted-foreground'>visibility</h3>
						<Eye size={20} />
					</div>
					<p className='text-2xl pt-4 pb-2.5'>
						10<span className='text-base'>Km</span>
					</p>
				</div>
				<div className='bg-background/40 rounded-2xl p-6'>
					<div className='flex items-center justify-between'>
						<h3 className='capitalize font-medium text-muted-foreground'>feels like</h3>
						<ThermometerSun size={20} />
					</div>
					<p className='text-2xl pt-4 pb-2.5'>
						2<span className='text-base'>c</span>
					</p>
				</div>
			</div>
		</Fragment>
	);
}
