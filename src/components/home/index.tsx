import { CurrentWeatherClient, HourlyWeatherClient } from './client';

export function CurrentWeather() {
	return (
		<article>
			<div className='bg-muted/50 rounded-3xl p-8'>
				<p className='text-lg'>Now</p>
				<CurrentWeatherClient />
			</div>
		</article>
	);
}

export function HourlyHighlight() {
	return (
		<article>
			<div className='bg-muted/50 rounded-3xl p-8'>
				<p className='text-lg mb-3.5'>Todays Highlights</p>
				<HourlyWeatherClient />
			</div>
		</article>
	);
}
