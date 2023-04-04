import { useEffect } from 'react';
import { ReciepItem, User } from './components';
import { useGetRecipesQuery } from './store/api/api';
import { Header } from './widget';

function App() {
	const { isLoading, data } = useGetRecipesQuery();

	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<section className="App">
			<Header />
			<User />
			<div className="recipies">
				<ReciepItem id={1} name="Lazania" />
				<ReciepItem id={2} name="Pasta" />
				<ReciepItem id={3} name="Bulyon" />
			</div>
		</section>
	);
}

export default App;
