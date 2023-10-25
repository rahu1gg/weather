import { store } from '@/client/store';
import { OPEN_WEATHER_URL } from '@/constants/api';

export type Weather = {
	weather: { description: string; icon: string }[];
	main: { temp: number; feels_like: number; pressure: number; humidity: number };
	visibility: number;
	dt: number;
	sys: {
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	name: string;
};

export async function getWeather() {
	const { latitude, longitude } = store.getState().serverSlice.defaultCoordinates;

	const res = await fetch(`${OPEN_WEATHER_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return (await res.json()) as Promise<Weather>;
}

export type AirQuality = {
	list: {
		components: {
			pm2_5: number;
			so2: number;
			no2: number;
			o3: number;
		};
	}[];
};

export async function getAirQuality() {
	const { latitude, longitude } = store.getState().serverSlice.defaultCoordinates;

	const res = await fetch(`${OPEN_WEATHER_URL}/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json() as Promise<AirQuality>;
}
