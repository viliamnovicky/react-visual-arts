import styled from "styled-components";

const StyledBackgroundCont = styled.div`
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  position: relative;
  z-index: 0;
  border-bottom: 1px solid var(--color-grey);
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const Heading = styled.h1`
  font-size: 3rem;
  padding: 4rem;
  z-index: 1;
  position: relative;
  width: 100%;
  text-align: center;
  font-weight: 100;
  background: var(--color-white-transp);
  color: var(--color-grey);
`;

function BackgroundCont({ image, heading, children, className }) {
  return (
    <StyledBackgroundCont className={className}>
      <Heading>{heading}</Heading>
      <Image src={image} />
      {children}
    </StyledBackgroundCont>
  );
}

export default BackgroundCont;
