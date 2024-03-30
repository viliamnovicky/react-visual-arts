import styled from "styled-components";

const StyledHomeImage = styled.div`
  width: 100vw;
  height: 70rem;
  overflow: hidden;
  border-bottom: 1px solid white;
  position: relative;
  z-index: 1;
  background: url(${(props) => props.imageUrl}) no-repeat center center/cover;

  @media screen and (max-width: 1000px){
    height: 50rem;
    }
    
  @media screen and (max-width: 600px){
    height: 35rem;
    }

    

`;

const Image = styled.img`
  width: 100%;
  position: relative;
`;

function HomeImage({ children, optClass, imageUrl }) {
  return (
    <StyledHomeImage className={`${optClass}`} imageUrl={imageUrl}>
      {children}
    </StyledHomeImage>
  );
}

export default HomeImage;
