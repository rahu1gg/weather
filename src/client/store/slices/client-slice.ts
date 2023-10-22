import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ClientState {
	weather: {
		description: string;
		icon: string;
		temperature: number;
		city: string;
		country: string;
		sunrise: number;
		sunset: number;
		humidity: number;
		pressure: number;
		visibility: number;
		feelslike: number;
	} | null;
	airQuality: {
		pm25: number;
		so2: number;
		no2: number;
		o3: number;
	} | null;
}

const initialState: ClientState = {
	weather: null,
	airQuality: null,
};

const slice = createSlice({
	name: 'client',
	initialState,
	reducers: {
		setweather: (state, action: PayloadAction<ClientState['weather']>) => {
			state.weather = action.payload;
		},
		setairquality: (state, action: PayloadAction<ClientState['airQuality']>) => {
			state.airQuality = action.payload;
		},
	},
});

export const { setweather, setairquality } = slice.actions;
export default slice.reducer;
