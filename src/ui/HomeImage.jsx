import styled from "styled-components";

const StyledHomeImage = styled.div`
  width: 100vw;
  height: 70rem;
  overflow: hidden;
  border-bottom: 1px solid white;
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
    width: 100%;
    position: relative;
`

function HomeImage({ image, children, optClass }) {
  return (
    <StyledHomeImage className={`${optClass}`}>
      <Image src={`../../public/${image}`}/>
      {children}
    </StyledHomeImage>
  );
}

export default HomeImage;
