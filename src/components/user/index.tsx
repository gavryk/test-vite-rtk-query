import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user/selector';
import { useAppDispatch } from '../../store/store';
import { getUserById } from '../../store/user/asyncUserActions';

export const User: React.FC = () => {
	const dispatch = useAppDispatch();
	const { user, isLoading, error } = useSelector(userSelector);

	return (
		<div>
			<button onClick={() => dispatch(getUserById(1))}>Get user</button>
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<div>{error}</div>
			) : user?.name ? (
				<h1>User: {user?.name}</h1>
			) : (
				<h1>User Not Found</h1>
			)}
		</div>
	);
};
