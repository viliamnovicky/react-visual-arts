import styled, { css, keyframes } from "styled-components";
import Button from "./Button";

const types = {
  image: css`
    width: 69vw;
    height: 46vw;
    animation: showModalImage 0.5s;
  `,
};

const ModalOuter = styled.div`
  position: fixed;
  background: var(--color-grey-transp);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(2px);
  transition: all 0.2s;

`;

const ModalInner = styled.div`
  animation: showModal 0.5s;
  overflow: hidden;
  position: absolute;
  width: 80vw;
  height: 90vh;
  background: var(--color-white);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  ${(props) => types[props.type]}
  background: url(${(props) => props.background}) no-repeat center center/cover;
`;

function Modal({ children, onClose, background, type }) {
  return (
    <ModalOuter>
      <ModalInner background={background} type={type}>
        <Button type="close" onClick={onClose}>
          &#x2715;
        </Button>
        {children}
      </ModalInner>
    </ModalOuter>
  );
}

export default Modal;
