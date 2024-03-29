import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Playfair Display";
  padding-bottom: 3rem;
  padding-top: 5rem;
  text-align: center;
  animation: fadeIn;
  animation-duration: 1s;
  height: 22rem;
  z-index:5;
  background: var(--color-light);
  position: relative;

  @media screen and (max-width: 1000px){
    height: 17rem;
    }

  h1 {
    font-weight: 100;
    font-size: 7.5rem;
    letter-spacing: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 1000px){
      font-size: 4rem;
      letter-spacing: 1rem;
    }

    @media screen and (max-width: 500px){
      font-size: 3rem;
      letter-spacing: .5rem;
    }
    
  }

  h5 {
    font-size: 2rem;
    letter-spacing: 3rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 1000px){
      font-size: 1.6rem;
      letter-spacing: 2rem;
    }

    @media screen and (max-width: 500px){
      font-size: 1.2rem;
      letter-spacing: 1rem;
    }
    
  }
`;

function Header({children}) {
  return (
    <StyledHeader>
      <h1>VILIAM NOVICKÝ</h1>
      <h5>visual arts</h5>
      {children}
    </StyledHeader>
  );
}

export default Header;
