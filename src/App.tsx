import { useState } from 'react';
import { ReciepItem, User } from './components';
import { useGetRecipesQuery } from './store/api/api';
import { CreateRecipe, Header } from './widget';

const userId = 1;

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [queryTerm, setQueryTerm] = useState('');
	const { isLoading, data } = useGetRecipesQuery(queryTerm, {
		skip: !userId,
	});

	const handleSearch = () => {
		setQueryTerm(searchTerm);
	};

	return (
		<section className="App">
			<Header />
			<User />
			<CreateRecipe />

			<div style={{ padding: 10 }}>
				<p>If you wanna find:</p>
				<input
					type="search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Enter search term"
				/>
				<button onClick={handleSearch}>Search</button>
			</div>

			<div className="recipies">
				{isLoading ? (
					<h1>Loading...</h1>
				) : data ? (
					data.map((item: any) => <ReciepItem key={item.id} {...item} />)
				) : (
					<h1>Not Found</h1>
				)}
			</div>
		</section>
	);
}

export default App;
