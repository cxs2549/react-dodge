import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

import Links from './Links/Links'

const StyledHeader = styled.header`
	background-color: black;
	color: inherit;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	z-index: 100;

	#wrapper {
		display: grid;
		align-items: center;
		padding-left: 1rem;
		max-width: var(--maxWidth);
		margin: 0 auto;
		position: relative;
		z-index: 100;
		@media (min-width: 1280px) {
			grid-template-columns: auto 1fr;
			padding: 0;
		}

		a {
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
		}
		a,
		.drop {
			text-transform: uppercase;
			font-size: 82%;
			text-decoration: none;
			color: white;
			white-space: nowrap;
			letter-spacing: 0.06em;
			padding: 0 .75rem;
			cursor: pointer;
			&:hover {
				background-color: gray;
			}
		}
		> div:first-of-type {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			z-index: 100;
			@media (min-width: 1280px) {
				gap: 1rem;
			}
			img {
				max-width: 124px;
				margin-top: 3px;
				@media (min-width: 1280px) {
					margin-left: 1rem;
				}
			}
		}
		> div:last-of-type {
			display: none;
			position: relative;
	
			a:first-of-type::before {
				content: '';
				position: absolute;
				left: -.5rem;
				top: 50%;
				transform: translateY(-50%);
				height: 36px;
				width: 2px;
				background-color: #bfbfbf;
			}
			@media (min-width: 1280px) {
				display: flex;
				justify-content: flex-end;
			}
		}
	}
`
const Header = () => {
	return (
		<StyledHeader>
			<div id="wrapper">
				<div>
					<img src={logo} alt="Dodge Logo" />
					<Links />
				</div>
				<div>
					<NavLink to="/">español</NavLink>
					<NavLink to="/">find a dealer</NavLink>
					<NavLink to="/">build & price</NavLink>
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
