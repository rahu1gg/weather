import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, MapPin } from 'lucide-react';
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
				<div className='bg-muted/40 rounded-3xl p-8 w-full text-center'>loading...</div>
			</section>
		</Fragment>
	);
}
