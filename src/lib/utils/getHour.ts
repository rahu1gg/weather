import { format, parseISO } from 'date-fns';

export function getHour(dt: number, timezone: number) {
	const [date] = new Date((dt + timezone) * 1000).toISOString().split('.');
	const formattedDate = format(parseISO(date), 'h aaa');
	return formattedDate;
}
