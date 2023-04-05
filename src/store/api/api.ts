import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipe'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}/recipes?_sort=id&_order=desc`,
	}),
	endpoints: (builder) => ({
		getRecipes: builder.query<void, void>({
			query: () => '/',
			providesTags: () => [
				{
					type: 'Recipe',
				},
			],
		}),
	}),
});

export const { useGetRecipesQuery } = api;
