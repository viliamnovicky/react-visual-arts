import styled, { css } from "styled-components";

const types = {
  category_cover: css`
    justify-content: center;
    align-items: center;
    width: 50vw;
    left: 50%;
    transform: translateX(-50%);
  `,
};

const StyledChosenFiles = styled.div`
  background: var(--color-light-2);
  width: calc(100% - 4rem);
  height: 20rem;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  display: flex;
  padding: 2rem;
  gap: 2rem;
  padding-bottom: 0rem;
  overflow-x: scroll;
  z-index: 5;
  border-bottom: 2rem solid var(--color-light-2);
  ${(props) => types[props.type]}
`;

const Image = styled.img`
  height: 100%;
  border-radius: 2rem;
  z-index: 6;
`;

const Text = styled.p`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  color: var(--color-white);
  font-size: 5rem;
  text-transform: uppercase
`

function ChosenFiles({ files, type, text }) {
  return (
    <StyledChosenFiles type={type}>
      {files.map((file, index) => (
        <>
        <Text>{text}</Text>
        <Image key={index} src={URL.createObjectURL(file)} alt={`Chosen Image ${index}`} />
        </>
      ))}
    </StyledChosenFiles>
  );
}

export default ChosenFiles;
