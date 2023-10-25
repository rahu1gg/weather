import { DEFAULT_COORDINATES } from '@/constants/home';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ServerState {
	defaultCoordinates: {
		latitude: string;
		longitude: string;
	};
}

const initialState: ServerState = {
	defaultCoordinates: {
		latitude: DEFAULT_COORDINATES.latitude,
		longitude: DEFAULT_COORDINATES.longitude,
	},
};

const slice = createSlice({
	name: 'client',
	initialState,
	reducers: {
		setdefaultcoordinates: (state, action: PayloadAction<ServerState['defaultCoordinates']>) => {
			state.defaultCoordinates = action.payload;
		},
	},
});

export const { setdefaultcoordinates } = slice.actions;
export default slice.reducer;
