import styled from "styled-components";
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  z-index: 1;
`;
const Overlay = ({ open }) => {
  return <StyledOverlay open={open}></StyledOverlay>;
};
export default Overlay;
