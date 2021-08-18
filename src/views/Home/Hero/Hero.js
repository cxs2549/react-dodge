import styled from 'styled-components'
import hero from '../../../assets/cars/challenger-hero.png'
import make from '../../../assets/cars/make.png'
const StyledHero = styled.div`
  /* background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: -50px center; */
  background-color: red;
  width: 100%;
  /* transform: scale(1.8); */
  position: relative;
  max-width: 100%;
  overflow: hidden;
  @media (min-width: 640px) {
    height: auto;
  }
  @media (min-width: 768px) {
    display: flex;
  height: 50vh;
  }
  @media (min-width: 1280px) {height: 59vh;}
  >div:first-of-type {
    height: 24vh;
    img {
    width: 100%;
      object-fit: contain;
      transform: scale(1.8);
      object-position: -40px 40px;
      height: 28vh;
      @media (min-width: 768px) {
        height: auto;
        transform: scale(1);
        object-fit: cover;
        object-position: center center;
      }
    }
  }
  #info {
    width: 100vw;
    clip-path: polygon(0 11%, 100% 0, 100% 100%, 0% 100%);
    background-image: linear-gradient(to bottom, #00000088, black 20%, black);
    color: white;
    position: relative;
    z-index: 100;
    padding: 3rem 1rem;
    @media (min-width: 768px) {
      padding: 1rem;
 
      position: absolute;
      left: 2rem;
      top: 0;
      bottom: 0;
      width: 35%;
      clip-path: none;
      height: min-content;
      background-image: none;
    }
    @media (min-width: 1280px) {
      top: 50%;
      transform: translateY(-50%);
    }
    #innerText {
      /* padding-top: 25px; */
      text-align: center;
      text-transform: uppercase;
      font-size: 66%;
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      z-index: 100;
      img {
        max-width: 100px;
        margin-bottom: 1rem;
      }
      p {
        margin: .5rem 0;
      }
      a {
        color: white;
      }
      #buttons {
        margin: .5rem 0;
        display: flex;
        justify-content: center;
        button {
          background-color: #CA2216;
          white-space: nowrap;
          color: white;
          border-radius: 4px;
          font-weight: bold;
          border: none;
          padding: .5rem 1rem;
          text-transform: uppercase;
          &:first-of-type {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`
const Hero = () => {
	return (
		<StyledHero>
			<div>
				<img src={hero} alt="" />
			</div>
			<div id="info">
				<div id="innerText">
					<div>
						<img src={make} alt="" />
					</div>
					<div>
						<h4>
							no monthly payments for 90 days* <br />
							plus <br />
							0% apr for 72 months++ <br />
							or <br />
							$2,000 retail consumer cash
						</h4>
						<p>
							on 2021 challenger srt hellcat models when financed through chrysler
							capital+++
						</p>
						<a href="/">show disclosure</a>
						<div id="buttons">
							<button>challenger offers</button>
							<button>learn more</button>
						</div>
					</div>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
