import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import serverReducer from './slices/server-slice';

const rootReducer = combineReducers({
	serverSlice: serverReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export const dispatch = (action: Action) => store.dispatch(action);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
