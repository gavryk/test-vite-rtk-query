import { useSelector } from 'react-redux';
import { favoritesSelector } from '../store/favorites/selector';

export const useFavorites = () => {
	const { items: favorites } = useSelector(favoritesSelector);
	return { favorites };
};
