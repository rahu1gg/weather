import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<div className='max-w-maxi mx-auto py-8 flex items-center justify-between text-muted-foreground text-sm'>
				<div>
					Made with ❤️ by{' '}
					<Link href={'https://github.com/rahu1gg'} className='underline underline-offset-4 font-semibold' target='_blank' rel='noreferrer'>
						rahu1gg
					</Link>
				</div>
				<div className='flex items-center justify-center gap-2'>
					<p className='italic'>Powered by</p>
					<span>
						<Image src={'/weather-icons/openweather.png'} width={100} height={100} alt='open-weather-pic' />
					</span>
				</div>
			</div>
		</footer>
	);
}
