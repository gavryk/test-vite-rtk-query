export interface IUser {
	id: number;
	name: string;
}

export interface IUserState {
	user: IUser;
	isLoading: boolean;
	error: string | null;
}
