import styled from 'styled-components'
import Header from './components/Header/Header'
import GlobalStyles from './globalStyles'
import Home from './views/Home/Home'

const StyledApp = styled.div``

const App = () => {
	return (
		<StyledApp>
			<GlobalStyles />
			<Header />
			<main>
				<Home />
			</main>
		</StyledApp>
	)
}
export default App
