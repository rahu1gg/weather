import { format, parseISO } from 'date-fns';

export function getTime(suntime: number, timezone: number) {
	const [date] = new Date((suntime + timezone) * 1000).toISOString().split('.');
	const formattedDate = format(parseISO(date), 'h:mm');
	return formattedDate;
}
