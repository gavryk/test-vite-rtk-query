import { api } from './api/api';
import favorites from './favorites/slice';
import user from './user/slice';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		favorites,
		user,
		[api.reducerPath]: api.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
