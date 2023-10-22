import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/main.scss';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
