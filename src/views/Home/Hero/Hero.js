import styled from "styled-components";
import hero from "../../../assets/cars/challenger-hero.png";
import make from "../../../assets/cars/make.png";
const StyledHero = styled.div`
  /* background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: -50px center; */
  
  width: 100%;
  /* transform: scale(1.8); */
  position: relative;
  @media (min-width: 768px) {
    display: flex;
  
  }
  >div:first-of-type {
    height: 20vh;
    @media (min-width: 768px) {
      order: 2;
    }
    img {
      max-width: 100%;
      object-fit: contain;
      transform: scale(1.8);
      object-position: -40px 20px;
      @media (min-width: 768px) {
        transform: scale(1);
        object-fit: cover;
        object-position: center center;
      }
    }
  }
  #info {
    
    width: 100vw;
    background-image: linear-gradient(to bottom, #00000088, black 30%, black);
    color: white;
    z-index: 1;
    padding-bottom: 2rem;
    @media (min-width: 768px) {
      position: absolute;
      left: -2rem;
      width: 50%;
      height: 100%;
      clip-path: none;
      background-image: 
      none;
    }
    #innerText {
      padding-top: 25px;
      text-align: center;
      text-transform: uppercase;
      font-size: 2em;
      text-size-adjust: 80%;
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      z-index: 100;
      img {
        max-width: 100px;
        margin-bottom: 1rem;
      }
      button {
        background-color: red;
        color: white;
        border: none;
        padding: .5rem 1rem;
        text-transform: uppercase;
        &:first-of-type {
          margin-right: 1rem;
        }
      }
    }
  }
`;
const Hero = () => {
  return (
    <StyledHero>
      <div>
        <img src={hero} alt="" />
      </div>
      <div id="info">
        <div id="innerText">
          <img src={make} alt="" />
          <h4>no monthly payments for 90 days* <br />
            plus <br />
            0% apr for 72 months++ <br />
            or <br />
            $2,000 retail consumer cash
          </h4>
          <p>on 2021 challenger srt hellcat models when financed through chrysler capital+++</p>
          <a href="/">show disclosure</a>
          <div>
            <button>challenger offers</button>
            <button>learn more</button>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};
export default Hero;
