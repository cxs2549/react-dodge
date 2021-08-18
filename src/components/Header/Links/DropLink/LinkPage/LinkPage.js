import styled from "styled-components";

const StyledLinkPage = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  min-height: 70vh;
  background-color: white;
  color: inherit;
  
`;
const LinkPage = ({ page }) => {
  return (
    <StyledLinkPage>
      {page}
    </StyledLinkPage>
  );
};
export default LinkPage;
