import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  z-index: 5;
  font-family: "Playfair Display";
  animation: fadeIn;
  animation-duration: 1s;
  position: sticky;
  top: 0;

  & li:hover {
    background: rgba(43, 43, 43, 0.5);
  }

  & li:hover a {
    color: white;
  }
`;

const List = styled.ul`
  z-index: 2;
  background: rgba(211, 211, 211, 0.8);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90vw;
  margin: auto;
  padding: 0;
  height: 5rem;
  border-top: white 0.1rem solid;
  border-bottom: white 0.1rem solid;
  text-decoration: none;
`;

const Link = styled.li`
  display: grid;
  margin: auto;
  align-items: center;
  justify-content: center;
  z-index: 2;
  list-style-type: none;
  transition: all 0.2s;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 1.6rem;
  text-transform: uppercase;
  position: relative;

  @media screen and (max-width: 1000px){
      font-size: 1.2rem;
    }

  
`;

const Anchor = styled(NavLink)`
  width: 100%;
  position: absolute;
  text-decoration: none;
  color: var(--color-dark);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <List>
        <Link>
          <Anchor to="/domov">Domov</Anchor>
        </Link>
        <Link>
          <Anchor to="/portfolio">portfolio</Anchor>
        </Link>
        <Link>
          <Anchor to="/obchod">obchod</Anchor>
        </Link>
        <Link>
          <Anchor to="/cennik">cenník</Anchor>
        </Link>
        <Link>
          <Anchor to="/kontakt">o mne / kontakt</Anchor>
        </Link>
        <Link>
          <Anchor to="/blog">blog</Anchor>
        </Link>
      </List>
    </StyledNavbar>
  );
}

export default Navbar;
