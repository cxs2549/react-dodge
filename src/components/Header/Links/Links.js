import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BiMenuAltRight } from 'react-icons/bi'
import DropLink from './DropLink/DropLink'

const StyledLinks = styled.nav`
	display: flex;
	align-items: center;
	>div:not(:nth-of-type(1)) {
		display: none;
	}
	@media (min-width: 640px) {
		>div:nth-of-type(2) {
			display: block;
		}
	}
	@media (min-width: 768px) {
		>div:nth-of-type(3) {
			display: block;
		}
	}
	@media (min-width: 1024px) {
		>div:is(:nth-of-type(4), :nth-of-type(5), :nth-of-type(6)) {
			display: block;
		}
	}
	
`
const Links = () => {
	const mainLinks = [
		{ name: 'vehicles', },
		{ name: 'shopping tools' },
		{ name: 'dodge garage', to: '/dodge-garage' },
		{ name: 'owners' },
		{ name: 'merchandise' },
		{ name: 'dodge muscle', to: '/dodge-muscle' }
	]
	return (
		<StyledLinks>
			{mainLinks.map((link, i) => (
				<div key={i}>
					{link.to && <NavLink to={link.to}>{link.name}</NavLink>}
					{!link.to && (
						<DropLink link={link.name} links={link.links} />
					)}
				</div>
			))}
			<BiMenuAltRight id="menu" />
		</StyledLinks>
	)
}
export default Links
