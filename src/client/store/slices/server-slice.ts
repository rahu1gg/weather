import { DEFAULT_COORDINATES } from '@/constants/home';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ServerState {
	defaultCoordinates: {
		latitude: string;
		longitude: string;
	};
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
		dt: number;
		timezone: number;
	} | null;
}

const initialState: ServerState = {
	defaultCoordinates: {
		latitude: DEFAULT_COORDINATES.latitude,
		longitude: DEFAULT_COORDINATES.longitude,
	},
	weather: null,
};

const slice = createSlice({
	name: 'client',
	initialState,
	reducers: {
		setdefaultcoordinates: (state, action: PayloadAction<ServerState['defaultCoordinates']>) => {
			state.defaultCoordinates = action.payload;
		},
		setweather: (state, action: PayloadAction<ServerState['weather']>) => {
			state.weather = action.payload;
		},
	},
});

export const { setdefaultcoordinates, setweather } = slice.actions;
export default slice.reducer;
