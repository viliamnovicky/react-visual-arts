import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1366px;
  padding: 5rem 0;
  margin: auto;
  gap: 2rem;
`;

const Heading = styled.h1`
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  margin: 5rem auto;
  padding: 5rem 0;
  font-size: 5rem;
  background: var(--color-white-transp);
  width: 1366px;
  border-radius: 2rem;


  span {
    display: block;
    font-size: 3rem;
    font-weight: 100;
  }
`;

const Paragraph = styled.p`
    width: 90%;
    padding: 2rem;
    text-align: justify;
    margin: auto;
    font-size: 2rem;
    font-weight: 800;
`;

const Image = styled.img`
width: 100%;
margin: auto;
width: 100%;
border-radius: 2rem;
`;

const AnotherImages = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 1366px;
    margin: auto;
    gap: 2rem;
    margin-bottom: 2rem;
`

export { Container, Heading, Paragraph, Image, AnotherImages };
