import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Droplets, Eye, MapPin, Sunrise, Sunset, ThermometerSun, Waves, Wind } from 'lucide-react';
import { Fragment } from 'react';

export function WeatherHighlightsLoading() {
	return (
		<Fragment>
			<section>
				<div className='bg-muted/40 rounded-3xl p-8 w-full'>
					<h2 className='text-lg'>Now</h2>
					<div className='grid grid-cols-2 items-center justify-center py-3 gap-4'>
						<Skeleton className='h-20 w-full' />
						<Skeleton className='h-20 w-full' />
					</div>
					<Skeleton className='h-4 w-full mb-3 mt-1 ' />
					<hr className='border-t w-full border-muted' />
					<div className='pt-3'>
						<div className='flex items-center justify-start gap-3'>
							<span>
								<Calendar size={18} />
							</span>
							<Skeleton className='h-5 w-full' />
						</div>
						<div className='flex items-center justify-start gap-3 pt-2.5'>
							<span>
								<MapPin size={18} />
							</span>
							<Skeleton className='h-5 w-full' />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='bg-muted/40 rounded-3xl p-8'>
					<h2 className='text-lg mb-3.5'>Todays Highlights</h2>
					<div className='grid grid-cols-4 gap-5'>
						<AirQualityIndexLoading />
						<SunriseSunsetLoading />
						<HumidityLoading />
						<PressureLoading />
						<VisibilityLoading />
						<FeelsLikeLoading />
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export function AirQualityIndexLoading() {
	return (
		<div className='bg-background/40 rounded-2xl p-6 col-span-2'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-semibold text-muted-foreground'>air quality index</h3>
				<Wind size={20} />
			</div>
			<div className='grid grid-cols-4 grid-rows-1 pb-4 pt-8 gap-3'>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>PM25</p>
					<Skeleton className='h-9 pt-1.5 w-full' />
				</div>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>SO2</p>
					<Skeleton className='h-9 pt-1.5 w-full' />
				</div>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>NO2</p>
					<Skeleton className='h-9 pt-1.5 w-full' />
				</div>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>O3</p>
					<Skeleton className='h-9 pt-1.5 w-full' />
				</div>
			</div>
		</div>
	);
}

function SunriseSunsetLoading() {
	return (
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
						<Skeleton className='w-full h-9' />
					</p>
				</div>
				<div>
					<div className='flex items-center justify-between'>
						<h3 className='capitalize font-medium text-sm text-muted-foreground'>sunset</h3>
						<Sunset size={18} />
					</div>
					<p className='text-2xl pt-1.5'>
						<Skeleton className='w-full h-9' />
					</p>
				</div>
			</div>
		</div>
	);
}

function HumidityLoading() {
	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-semibold text-muted-foreground'>humidity</h3>
				<Droplets size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				<Skeleton className='h-8 w-full' />
			</p>
		</div>
	);
}

function PressureLoading() {
	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-medium text-muted-foreground'>pressure</h3>
				<Waves size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				<Skeleton className='h-8 w-full' />
			</p>
		</div>
	);
}

function VisibilityLoading() {
	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-medium text-muted-foreground'>visibility</h3>
				<Eye size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				<Skeleton className='h-8 w-full' />
			</p>
		</div>
	);
}

function FeelsLikeLoading() {
	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-medium text-muted-foreground'>feels like</h3>
				<ThermometerSun size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				<Skeleton className='h-8 w-full' />
			</p>
		</div>
	);
}

export function ForecastLoading() {
	return (
		<Fragment>
			<section>
				<div className='bg-muted/40 rounded-3xl p-8 mt-8'>
					<h2 className='text-lg'>5 Days Forecast</h2>
					<div className='pt-4'>
						{[1, 2, 3, 4, 5].map((val, index) => (
							<div key={`${index}`} className='flex items-center justify-between py-1'>
								<Skeleton className='h-10 w-full' />
							</div>
						))}
					</div>
				</div>
			</section>
			<section>
				<h2 className='text-lg pt-4 pb-3'>Today at</h2>
				<div className='flex items-center justify-start gap-3 overflow-x-scroll'>loading...</div>
			</section>
		</Fragment>
	);
}
