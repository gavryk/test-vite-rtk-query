import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipe'],
	baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.REACT_APP_BASE_URL}/recipes` }),
	endpoints: (builder) => ({}),
});
