import styled from "styled-components";
import Hero from "./Hero/Hero";
const StyledHome = styled.div`
  position: relative;
  z-index: 10;
`;
const Home = () => {
  return (
    <StyledHome>
      <Hero />
    </StyledHome>
  );
};
export default Home;
