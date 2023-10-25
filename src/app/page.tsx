import { dispatch } from '@/client/store';
import { setdefaultcoordinates } from '@/client/store/slices/server-slice';
import Forecast from '@/components/pages/home/forecast';
import { WeatherHighlights } from '@/components/pages/home/weather-highlights';
import { DEFAULT_COORDINATES } from '@/constants/home';
import { redirect } from 'next/navigation';

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const { lat, lon } = searchParams;

	if (lat === undefined || lon === undefined) redirect(`/?lat=${DEFAULT_COORDINATES.latitude}&lon=${DEFAULT_COORDINATES.longitude}`);
	dispatch(setdefaultcoordinates({ latitude: lat as string, longitude: lon as string }));

	return (
		<main className='max-w-maxi mx-auto grid grid-cols-main grid-rows-none items-start gap-8'>
			<WeatherHighlights />
			<Forecast />
		</main>
	);
}
