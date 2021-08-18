import styled from "styled-components";
import charger from '../../../../../../assets/cars/charger.png'
const StyledVehicles = styled.div`
  padding: 1.2rem 1rem;
  text-transform: uppercase;
  > h4 {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgb(191, 191, 191);
  }
  ul {
    li {
      border-bottom: 1px solid rgb(191, 191, 191);
      display: flex;
      align-items: center;
      padding: 1rem 0;
      gap: 2rem;
      width: 100%;
      cursor: pointer;
      img {
        min-width: 165px;
      }
      h4 {
        margin-bottom: 0.5rem;
      }
      #info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: flex-start;
        justify-content: space-between;
        min-width: 100%;
        p {
          font-size: 66%;
          white-space: nowrap;
          opacity: 0.75;
        }
        > div:last-of-type {
          margin-left: auto;
          color: rgb(213, 0, 1);
        }
      }
    }
  }
`;
const Vehicles = () => {
  return (
    <StyledVehicles id="vehicles">
      <h4>All Dodge Vehicles</h4>
      <ul>
        <li>
          <img src={charger} alt="" />
          <div>
            <h4>charger</h4>
            <div id="info">
              <div>
                <p>msrp* starting at</p>
                <h3>$30,570</h3>
              </div>
              <div>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </StyledVehicles>
  );
};
export default Vehicles;
