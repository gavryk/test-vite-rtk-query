import { ReciepItem, User } from './components';
import { Header } from './widget';

function App() {
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
