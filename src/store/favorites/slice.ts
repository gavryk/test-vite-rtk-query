import { createSlice } from '@reduxjs/toolkit';

const initialState = <any>{
	items: [],
};

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: recipe }) => {
			const isExist = state.items.some((r: any) => r.id === recipe.id);
			if (isExist) {
				const index = state.items.findIndex((item: any) => item.id === recipe.id);
				if (index !== -1) state.items.splice(index, 1);
			} else state.items.push(recipe);
		},
	},
});

export const { toggleFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
