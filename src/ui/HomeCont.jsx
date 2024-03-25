import styled from "styled-components";

const StyledHomeCont = styled.div`
  position: absolute;
  display: block;
  width: 60rem;
  z-index: 100;
  background: var(--color-grey-transp-2);
  padding: 4rem 2rem;
  border-radius: 2rem;

  @media screen and (max-width: 1000px){
      width: 90%;
    }

  h1 {
    font-size: 4rem;
    color: white;
    font-weight: 100;
    text-align: center;
    margin-bottom: 2rem;

    @media screen and (max-width: 1000px){
      font-size: 2rem;
    }
  }

  p {
    color: white;
    font-size: 2rem;
    text-align: justify;
    width: 90%;
    margin: auto;

    @media screen and (max-width: 1000px){
      font-size: 1.6rem;
    }

    @media screen and (max-width: 600px){
      font-size: 1.2rem;
    }
  }
`;

function HomeCont({ optClass, children }) {
  return <StyledHomeCont className={`${optClass}`}>{children}</StyledHomeCont>;
}

export default HomeCont;
