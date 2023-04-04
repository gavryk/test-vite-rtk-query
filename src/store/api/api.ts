import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	// tagTypes: ['Recipe'],
	baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/recipes` }),
	endpoints: (builder) => ({
		getRecipes: builder.query<void, void>({
			query: () => '/',
		}),
	}),
});

export const { useGetRecipesQuery } = api;
