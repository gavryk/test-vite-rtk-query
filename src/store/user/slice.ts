import { createSlice } from '@reduxjs/toolkit';
import { getUserById } from './asyncUserActions';

interface userSliceProp {
	isLoading: boolean;
	error: string | null;
	user: {
		id: number | string;
		name: string;
	};
}

const initialState: userSliceProp = {
	isLoading: false,
	error: null,
	user: {
		id: '',
		name: '',
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUserById.fulfilled, (state, action) => {
			state.user = action.payload as any;
			state.isLoading = false;
		});
		builder.addCase(getUserById.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as any;
			state.user = { id: '', name: '' };
		});
	},
});

export default userSlice.reducer;
