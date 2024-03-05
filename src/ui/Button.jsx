import styled, { css } from "styled-components";

const types = {
  admin: css`
    width: 100%;
    height: 5rem;
    background: transparent;
    text-transform: uppercase;
    color: var(--color-grey-transp-2);
    border-radius: 2rem;

    &:hover {
      background: var(--color-grey-transp);
    }
  `,

  price: css`
    position: absolute ;
    bottom: 15rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    height: 5rem !important;
    width: 80% !important;
    font-weight: 800 !important;
    text-transform: uppercase;
    color: var(--color-grey);
    opacity: 0;
    font-family: 'Dosis', sans-serif;
  `,
};

const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${(props) => types[props.type]}
  background: var(--color-grey-transp-2);
  transition: all 0.2s;
  width: 17rem;
  height: 4rem;
  font-size: 2rem;
  border-radius: 50rem;

  &:hover {
    background: var(--color-grey-transp);
    color: var(--color-white);
  }
`;

// Button.defaultProps = {
//     variation: "primary",
//     size: "large"
//   };

export default Button;
