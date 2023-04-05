import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserById } from './asyncUserActions';
import { IUser, IUserState } from '../../types/user.types';

const initialState: IUserState = {
	isLoading: false,
	error: null,
	user: {} as IUser,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserById.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
			state.isLoading = false;
		});
		builder.addCase(getUserById.rejected, (state, action: any) => {
			state.isLoading = false;
			state.error = action.payload;
			state.user = {} as IUser;
		});
	},
});

export default userSlice.reducer;
