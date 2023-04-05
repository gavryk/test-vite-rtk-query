import { ReciepItem, User } from './components';
import { useGetRecipesQuery } from './store/api/api';
import { CreateRecipe, Header } from './widget';

const userId = 1;

function App() {
	const { isLoading, data } = useGetRecipesQuery(null, {
		skip: !userId,
	});

	return (
		<section className="App">
			<Header />
			<User />
			<CreateRecipe />
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
