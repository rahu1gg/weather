import { dispatch } from '@/client/store';
import { setdefaultcoordinates } from '@/client/store/slices/server-slice';
import Forecast from '@/components/pages/home/forecast';
import { WeatherHighlights } from '@/components/pages/home/highlights';
import { DEFAULT_COORDINATES } from '@/constants/home';
import { redirect } from 'next/navigation';

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const { lat, lon } = searchParams;

	if (lat === undefined || lon === undefined) redirect(`/?lat=${DEFAULT_COORDINATES.latitude}&lon=${DEFAULT_COORDINATES.longitude}`);
	dispatch(setdefaultcoordinates({ latitude: lat as string, longitude: lon as string }));

	return (
		<main className='grid grid-cols-main max-w-maxi mx-auto gap-8 pb-8 items-start'>
			<WeatherHighlights />
			<Forecast />
		</main>
	);
}
