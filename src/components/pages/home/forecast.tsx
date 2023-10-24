import { store } from '@/client/store';
import { OPEN_WEATHER_URL } from '@/constants/api';
import { getCelcius } from '@/lib/utils/getCelcius';
import { getHour } from '@/lib/utils/getHour';
import { format } from 'date-fns';
import Image from 'next/image';
import { Fragment, Suspense } from 'react';
import { ForecastLoading } from './loading';

export default function Forecast() {
	return (
		<Fragment>
			<Suspense fallback={<ForecastLoading />}>
				<AllForecast />
			</Suspense>
		</Fragment>
	);
}

type ForecastT = {
	list: {
		dt: number;
		main: {
			temp: number;
		};
		weather: {
			icon: string;
		}[];
		wind: {
			speed: number;
			deg: number;
		};
	}[];
	city: {
		timezone: number;
	};
};

async function getForecast() {
	const { latitude, longitude } = store.getState().serverSlice.defaultCoordinates;

	const res = await fetch(`${OPEN_WEATHER_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
		next: { revalidate: 300 },
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json() as Promise<ForecastT>;
}

async function AllForecast() {
	const forecast = await getForecast();

	return (
		<Fragment>
			<section>
				<div className='bg-muted/40 rounded-3xl p-8 mt-8'>
					<h2 className='text-lg'>5 Days Forecast</h2>
					<div className='pt-4'>
						{forecast.list
							.filter((val, index) => !(index % 8) && val)
							.map((val, index) => (
								<div key={`${index}`} className='flex items-center justify-between py-1'>
									<div className='flex items-center justify-start gap-2'>
										<Image src={`/weather-icons/${val.weather[0].icon}.png`} className='w-10' width={100} height={100} alt='icon' />
										<span className='text-lg'>{getCelcius(val.main.temp)}&deg;</span>
									</div>
									<div className='grow flex items-center justify-center'>
										<p className='text-muted-foreground text-xs capitalize text-right w-full'>
											{format(new Date((val.dt + forecast.city.timezone) * 1000), 'e MMM')}
										</p>
										<p className='text-muted-foreground text-xs capitalize text-end w-full'>
											{format(new Date((val.dt + forecast.city.timezone) * 1000), 'EEEE')}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
			<section className='overflow-x-hidden'>
				<h2 className='text-lg pt-4 pb-3'>Today at</h2>
				<div className='flex items-center justify-start gap-3 overflow-x-scroll'>
					{forecast.list.slice(0, 8).map((val, index) => (
						<div key={`${index}`} className='grid grid-rows-2 gap-3'>
							<div className='bg-muted/40 rounded-2xl py-4 px-8 text-center'>
								<p className='uppercase text-base whitespace-nowrap'>{getHour(val.dt, forecast.city.timezone)}</p>
								<Image src={`/weather-icons/${val.weather[0].icon}.png`} className='w-12 py-2 inline-block' width={100} height={100} alt='icon' />
								<span className='text-sm'>{getCelcius(val.main.temp)}&deg;</span>
							</div>
							<div className='bg-muted/50 rounded-2xl py-4 px-8 text-center'>
								<p className='uppercase text-base whitespace-nowrap'>{getHour(val.dt, forecast.city.timezone)}</p>
								<Image
									style={{ rotate: `${val.wind.deg}deg` }}
									src={'/weather-icons/direction.png'}
									className='w-12 py-2 inline-block'
									width={100}
									height={100}
									alt='icon'
								/>
								<span className='text-sm whitespace-nowrap'>
									{val.wind.speed}
									<span className='text-xs'>km/h</span>
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
		</Fragment>
	);
}
