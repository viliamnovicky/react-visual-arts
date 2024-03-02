import styled from "styled-components";

const StyledHomeCont = styled.div`
  position: absolute;
  display: block;
  width: 60rem;
  z-index: 100;
  background: var(--color-grey-transp-2);
  padding: 4rem 2rem;
  border-radius: 2rem;

  h1 {
    font-size: 4rem;
    color: white;
    font-weight: 100;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    color: white;
    font-size: 2rem;
    text-align: justify;
    width: 90%;
    margin: auto;
  }
`;

function HomeCont({ optClass, children }) {
  return <StyledHomeCont className={`${optClass}`}>{children}</StyledHomeCont>;
}

export default HomeCont;
