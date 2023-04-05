import React, { useState } from 'react';
import { useCreateRecipeMutation } from '../../../store/api/recipe.api';

export const CreateRecipe: React.FC = () => {
	const [recipe, setRecipe] = useState({
		name: '',
		image: '',
	});
	const [createRecipe] = useCreateRecipeMutation();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		createRecipe(recipe).then(() => {
			setRecipe({
				name: '',
				image: '',
			});
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>Create Recipe</h3>
				<label>
					<input
						type="text"
						placeholder="Name"
						value={recipe.name}
						onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
					/>
				</label>
				<label>
					<input
						type="text"
						placeholder="Image"
						value={recipe.image}
						onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
					/>
				</label>
				<button type="submit">Create</button>
			</form>
		</div>
	);
};
