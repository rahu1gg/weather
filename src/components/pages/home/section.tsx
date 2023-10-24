import { store } from '@/client/store';
import { getCelcius } from '@/lib/utils/getCelcius';
import { getTime } from '@/lib/utils/getTime';
import { Droplets, Eye, Sunrise, Sunset, ThermometerSun, Waves, Wind } from 'lucide-react';
import { Fragment, Suspense } from 'react';
import { getAirQuality } from './api';

export default function Section() {
	return (
		<Fragment>
			<TodayHighlights />
		</Fragment>
	);
}

function TodayHighlights() {
	return (
		<div className='bg-muted/40 rounded-3xl p-8'>
			<h2 className='text-lg mb-3.5'>Todays Highlights</h2>
			<div className='grid grid-cols-4 gap-5'>
				<Suspense fallback={<div className='bg-background/40 rounded-2xl p-6 col-span-2'>loading...</div>}>
					<AirQualityIndex />
				</Suspense>
				<SunriseSunset />
				<Humidity />
				<Pressure />
				<Visibility />
				<FeelsLike />
			</div>
		</div>
	);
}

async function AirQualityIndex() {
	const airQuality = await getAirQuality();
	const { pm2_5, so2, no2, o3 } = airQuality.list[0].components;

	return (
		<div className='bg-background/40 rounded-2xl p-6 col-span-2'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-semibold text-muted-foreground'>air quality index</h3>
				<Wind size={20} />
			</div>
			<div className='grid grid-cols-4 grid-rows-1 pb-4 pt-8'>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>PM25</p>
					<span className='text-2xl pt-1.5'>{pm2_5}</span>
				</div>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>SO2</p>
					<span className='text-2xl pt-1.5'>{so2}</span>
				</div>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>NO2</p>
					<span className='text-2xl pt-1.5'>{no2}</span>
				</div>
				<div className='text-center'>
					<p className='text-muted-foreground text-sm'>O3</p>
					<span className='text-2xl pt-1.5'>{o3}</span>
				</div>
			</div>
		</div>
	);
}

function SunriseSunset() {
	const weather = store.getState().serverSlice.weather;

	if (!weather) return null;

	const { sunrise, sunset, timezone } = weather;
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
						{getTime(sunrise, timezone)}
						<span className='text-base'>AM</span>
					</p>
				</div>
				<div>
					<div className='flex items-center justify-between'>
						<h3 className='capitalize font-medium text-sm text-muted-foreground'>sunset</h3>
						<Sunset size={18} />
					</div>
					<p className='text-2xl pt-1.5'>
						{getTime(sunset, timezone)}
						<span className='text-base'>PM</span>
					</p>
				</div>
			</div>
		</div>
	);
}

function Humidity() {
	const weather = store.getState().serverSlice.weather;

	if (!weather) return null;

	const { humidity } = weather;
	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-semibold text-muted-foreground'>humidity</h3>
				<Droplets size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				{humidity}
				<span className='text-base'>%</span>
			</p>
		</div>
	);
}

function Pressure() {
	const weather = store.getState().serverSlice.weather;

	if (!weather) return null;

	const { pressure } = weather;

	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-medium text-muted-foreground'>pressure</h3>
				<Waves size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				{pressure}
				<span className='text-base'>hPa</span>
			</p>
		</div>
	);
}

function Visibility() {
	const weather = store.getState().serverSlice.weather;

	if (!weather) return null;

	const { visibility } = weather;
	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-medium text-muted-foreground'>visibility</h3>
				<Eye size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				{(visibility / 1000).toFixed(1)}
				<span className='text-base'>Km</span>
			</p>
		</div>
	);
}

function FeelsLike() {
	const weather = store.getState().serverSlice.weather;

	if (!weather) return null;

	const { feelslike } = weather;
	return (
		<div className='bg-background/40 rounded-2xl p-6'>
			<div className='flex items-center justify-between'>
				<h3 className='capitalize font-medium text-muted-foreground'>feels like</h3>
				<ThermometerSun size={20} />
			</div>
			<p className='text-2xl pt-4 pb-2.5'>
				{getCelcius(feelslike)}&deg;<sup>c</sup>
			</p>
		</div>
	);
}
