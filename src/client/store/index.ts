import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import clientReducer from './slices/client-slice';
import serverReducer from './slices/server-slice';

const rootReducer = combineReducers({
	serverSlice: serverReducer,
	clientSlice: clientReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export const dispatch = (action: Action) => store.dispatch(action);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
