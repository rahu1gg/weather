import { format } from 'date-fns';

export function getDate(dt: number, timezone: number) {
	const date = new Date((dt + timezone) * 1000);
	const formattedDate = format(date, 'EEEE d, MMM');
	return formattedDate;
}
