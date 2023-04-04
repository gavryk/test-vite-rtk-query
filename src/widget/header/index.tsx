import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import styles from './styles.module.scss';
import { useFavorites } from '../../hooks';

export const Header: React.FC = () => {
	const { favorites } = useFavorites();

	return (
		<header className={styles.header}>
			<AiFillHeart size="20" />
			<span className={styles.favCount}>{favorites.length}</span>
		</header>
	);
};
