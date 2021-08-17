import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { BiMenuAltRight } from 'react-icons/bi'

const StyledHeader = styled.div`
	background-color: black;
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	display: grid;
	align-items: center;
	padding: 0 1rem;
	@media (min-width: 768px) {
		padding: 0 1.75rem;
	}
	@media (min-width: 1280px) {
		grid-template-columns: auto 1fr;
	}
	> div:first-of-type {
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (min-width: 1280px) {
			gap: 2rem;
		}
		img {
			max-width: 140px;
		}
		a {
			text-decoration: none;
			color: white;
			white-space: nowrap;
		}
		#menu {
			@media (min-width: 1280px) {
				display: none;
			}
		}
		nav {
			display: flex;
			gap: 2rem;
			a:not(:nth-of-type(1)) {
				display: none;
			}
			@media (min-width: 640px) {
				a:nth-of-type(2) {
					display: block;
				}
			}
			@media (min-width: 768px) {
				a:nth-of-type(3) {
					display: block;
				}
			}
			@media (min-width: 1024px) {
				a:is(:nth-of-type(4), :nth-of-type(5)) {
					display: block;
				}
			}
		}
	}
	> div:last-of-type {
		display: none;
		@media (min-width: 1280px) {
			display: flex;
			justify-content: flex-end;
			gap: 2rem;
		}
	}
`
const Header = () => {
	const mainLinks = [
		{ name: 'vehicles', to: '/vehicles' },
		{ name: 'shopping tools', to: '/shopping-tools' },
		{ name: 'dodge garage', to: '/dodge-garage' },
		{ name: 'owners', to: '/owners' },
		{ name: 'merchandise', to: '/merchandise' },
		{ name: 'dodge muscle', to: '/dodge-muscle' }
	]
	return (
		<StyledHeader>
			<div>
				<img src={logo} alt="" />
				<nav>
					{mainLinks.map((link, i) => (
						<NavLink key={i} to={link.to}>
							{link.name}
						</NavLink>
					))}
				<BiMenuAltRight id="menu" />
				</nav>
			</div>
			<div>
				<div>espanol</div>
				<div>find a dealer</div>
				<div>build & price</div>
			</div>
		</StyledHeader>
	)
}
export default Header
