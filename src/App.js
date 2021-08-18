import Header from './components/Header/Header'
import GlobalStyles from './globalStyles'
import Home from './views/Home/Home'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<main>
				<Home />
			</main>
		</>
	)
}
export default App
