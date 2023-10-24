'use server';

import { OPEN_WEATHER_URL } from '@/constants/api';

type ReverseGeo = {
	name: string;
	lat: number;
	lon: number;
}[];

export async function redirectToCurrentLocation({ lat, lon }: { lat: number; lon: number }) {
	try {
		const res = await fetch(`${OPEN_WEATHER_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return { success: true, data: (await res.json()) as ReverseGeo };
	} catch (err) {
		console.log('error in redirect to current location', err);
		return { success: false };
	}
}
