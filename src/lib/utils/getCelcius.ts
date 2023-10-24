// function that takes temperature in kelvin and returns temperature in celcius

const KELVIN_LOWER_TEMPERATURE = 273.15;

export function getCelcius(temp: number) {
	const val = Math.round(temp - KELVIN_LOWER_TEMPERATURE);
	return val;
}
