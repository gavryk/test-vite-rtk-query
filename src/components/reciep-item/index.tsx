import React from 'react';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../store/store';
import { toggleFavorites } from '../../store/favorites/slice';
import { useFavorites } from '../../hooks';
import { IRecipe } from '../../types/recipe.types';

export const ReciepItem: React.FC<IRecipe> = ({ id, name, image }) => {
	const dispatch = useAppDispatch();
	const { favorites } = useFavorites();

	const isExist = favorites.some((item: IRecipe) => item.id === id);

	const favoriteHandle = (id: number) => {
		dispatch(toggleFavorites({ id, name, image }));
	};

	return (
		<div className={styles.recipe}>
			<div className={styles.image}>
				<img src={image} alt={name} width={100} />
			</div>
			<div className={styles.info}>
				<h3>{name}</h3>
				<button onClick={() => favoriteHandle(id)}>
					{isExist ? 'Remove from' : 'Add to'} favorites
				</button>
			</div>
		</div>
	);
};
