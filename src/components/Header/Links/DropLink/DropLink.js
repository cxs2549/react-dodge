import { useState } from 'react'
import styled from 'styled-components'

const StyledDropLink = styled.div`
	position: relative;
	padding: 0 .75rem;
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	> div {
		position: fixed;
		left: 0;
		top: 60px;
		width: 100%;
		height: calc(100vh - 60px);
		background-color: red;
	}
	span:last-of-type {
		margin-left: .5rem;
	}
`
const DropLink = ({ link, links }) => {
	const [ openDrop, setOpenDrop ] = useState(null)
	const handleClick = (link) => {
		if (openDrop !== null) return setOpenDrop(null)
		setOpenDrop(link)
	}
	return (
		<StyledDropLink className="drop" onClick={() => handleClick(link)}>
			<span>{link}</span>
			{openDrop}
			<span>
				<i class="fa fa-chevron-down" aria-hidden="true" />
			</span>
			{openDrop === link && (
				<div>
					<ul>{links.map((link, i) => <li key={i}>{link}</li>)}</ul>
				</div>
			)}
		</StyledDropLink>
	)
}
export default DropLink
