import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import DropLink from "./DropLink/DropLink";
import Vehicles from "./DropLink/LinkPage/Vehicles/Vehicles";
import Menu from "./DropLink/LinkPage/Menu/Menu";

const StyledLinks = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  color: inherit;
  >div {
    &:hover {
      background-color: gray;
    }
  }
  > div:not(:nth-of-type(1)) {
    display: none;
  }
  @media (min-width: 640px) {
    > div:nth-of-type(2) {
      display: block;
    }
  }
  @media (min-width: 768px) {
    > div:nth-of-type(3) {
      display: block;
    }
  }
  @media (min-width: 1024px) {
    > div:is(:nth-of-type(4), :nth-of-type(5), :nth-of-type(6)) {
      display: block;
    }
  }

  #menu {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.75rem;
    /* cursor: pointer; */
    position: relative;
    z-index: 300;
    color: white;
    &:hover {
      background-color: gray;
    }
    @media (min-width: 1280px) {
      display: none;
    }
  }
`;
const Links = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const mainLinks = [
    {
      name: "vehicles",
      page: <Vehicles />,
    },
    {
      name: "shopping tools",
      pageInfo: {
        name: "shopping",
      },
    },
    { name: "dodge garage", to: "/dodge-garage" },
    {
      name: "owners",
      pageInfo: {
        name: "owners",
      },
    },
    {
      name: "merchandise",
      pageInfo: {
        name: "merch",
      },
    },
    { name: "dodge muscle", to: "/dodge-muscle" },
  ];

  return (
    <StyledLinks>
      {mainLinks.map((link, i) => (
        <div key={i}>
          {link.to && <NavLink to={link.to}>{link.name}</NavLink>}
          {!link.to && (
            <DropLink page={link.page}>
              {link.name}
              <span>
                <i class="fa fa-chevron-down" aria-hidden="true" />
              </span>
            </DropLink>
          )}
        </div>
      ))}
      <section id="menu" onClick={() => setOpenMenu(!openMenu)}>
        <DropLink page={<Menu />}>
          <BiMenuAltRight />
        </DropLink>
      </section>
    </StyledLinks>
  );
};
export default Links;
