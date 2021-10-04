import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a>
        <img src="/images/teslalogo.png" style={{ width: "150px" }}></img>
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="#">
                {car}
              </a>
            );
          })}
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>

        <ToggleMenu onClick={() => setNavMenuOpen(true)} />
      </RightMenu>
      <NavMenu show={navMenuOpen}>
        <CloseButtonWrapper>
          <CloseButton onClick={() => setNavMenuOpen(false)} />
        </CloseButtonWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href="#">{car}</a>
              </li>
            );
          })}
        <li>
          <a href="#">Solar Roof</a>
        </li>{" "}
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </NavMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3em;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 1200px) {
    padding: 0 1em;
  } ;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  letter-spacing: 3px;
  a {
    font-weight: 600;
    font-size: 14px;
    padding: 0 1em;
    flex-wrap: no-wrap;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    font-size: 14px;
    padding: 0 0.5em;
    flex-wrap: no-wrap;
  }
`;

const ToggleMenu = styled(MenuIcon)`
  cursor: pointer;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 3;
  list-style: none;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 3em 1em 8em 3em;
  font-weight: 600;
  font-size: 14px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: all 500ms ease-in-out;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
  opacity: 0.5;
`;
