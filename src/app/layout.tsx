import ReduxProvider from '@/client/providers/redux-provider';
import Header from '@/components/pages/header';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import '../styles/main.scss';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
	title: 'Weather',
	description: 'A weather app made using Next.js app router and open-weather api',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='dark'>
			<body className={nunitoSans.className}>
				<ReduxProvider>
					<Header />
					{children}
				</ReduxProvider>
			</body>
		</html>
	);
}
