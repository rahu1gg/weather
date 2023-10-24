'use server';

import { OPEN_WEATHER_URL } from '@/constants/api';

export type Places = {
	name: string;
	state: string;
	country: string;
	lat: number;
	lon: number;
}[];

export async function getPlaces({ location }: { location: string }) {
	try {
		const res = await fetch(`${OPEN_WEATHER_URL}/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.OPEN_WEATHER_API_KEY}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return { success: true, data: (await res.json()) as Places };
	} catch (err) {
		console.log('error in redirect to current location', err);
		return { success: false, data: [] };
	}
}
