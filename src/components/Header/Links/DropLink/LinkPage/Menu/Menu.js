import styled from 'styled-components'
const StyledMenu = styled.div`
padding: 1rem;
  height: 100vh;
  color: #333;
`
const Menu = () => {
return (
<StyledMenu>
  <div>
    <div>build & price</div>
    <div>find a dealer</div>
    <ul>
      <li>shopping tools</li>
      <li>dodge garage</li>
    </ul>
  </div>
</StyledMenu>
)
}
export default Menu