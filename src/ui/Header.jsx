import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Playfair Display";
  padding-bottom: 3rem;
  padding-top: 5rem;
  text-align: center;
  animation: fadeIn;
  animation-duration: 1s;
  height: 22rem;

  h1 {
    font-weight: 100;
    font-size: 7.5rem;
    letter-spacing: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  h5 {
    font-size: 2rem;
    letter-spacing: 3rem;
    padding-bottom: 1rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>VILIAM NOVICKÝ</h1>
      <h5>visual arts</h5>
    </StyledHeader>
  );
}

export default Header;
