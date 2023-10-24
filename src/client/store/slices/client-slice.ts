import { Places } from '@/components/pages/header/actions';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ClientState {
	header: {
		places: {
			value: Places | null;
			showPlaces: boolean;
			loading: boolean;
		};
	};
}

const initialState: ClientState = {
	header: {
		places: {
			value: null,
			showPlaces: false,
			loading: false,
		},
	},
};

const slice = createSlice({
	name: 'client',
	initialState,
	reducers: {
		setplaces: (state, action: PayloadAction<ClientState['header']['places']>) => {
			state.header.places = action.payload;
		},
		setplacesloading: (state, action: PayloadAction<ClientState['header']['places']['loading']>) => {
			state.header.places.loading = action.payload;
		},
	},
});

export const { setplaces, setplacesloading } = slice.actions;
export default slice.reducer;
