import styled from "styled-components";

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
  border-bottom: 2rem solid var(--color-light-2);
`;

const Image = styled.img`
    height: 100%;
    border-radius: 2rem;

`

function ChosenFiles({ files }) {
    return (
      <StyledChosenFiles>
        {files.map((file, index) => (
          <Image key={index} src={URL.createObjectURL(file)} alt={`Chosen Image ${index}`} />
        ))}
      </StyledChosenFiles>
    );
  }

export default ChosenFiles