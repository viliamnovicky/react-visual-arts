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
    position: absolute;
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
    font-family: "Dosis", sans-serif;
  `,

store: css`
position: absolute;
bottom: 5rem;
left: 50%;
transform: translateX(-50%);
height: 5rem !important;
width: 50% !important;
font-weight: 800 !important;
text-transform: uppercase;
color: var(--color-grey);
font-family: "Dosis", sans-serif;
`,

  close: css`
    position: fixed;
    right: 2rem;
    top: 2rem;
    z-index: 121000;
    border-radius: 50%;
    width: 5rem !important;
    height: 5rem !important;
    background: rgba(230, 230, 230, 0.1);
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
      background: rgba(230, 230, 230, 0.2);
      transform: rotate(90deg);
    }
  `,
};

const colors = {
  primary: css`
    background: var(--color-grey-transp);
    color: var(--color-white);

    &:hover {
      background: var(--color-grey-transp-3);
    }
  `,
  secondary: css`
  background: var(--color-white-transp);
  color: var(--color-dark);

  &:hover {
    background: var(--color-white-transp-2);
  }
`,
hidden: css`
  opacity: 0;
  background: transparent;
  color: transparent;
  cursor: default;
`
}

const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  transition: all 0.2s !important;
  width: 17rem;
  height: 4rem;
  font-size: 2rem;
  border-radius: 50rem;
  font-weight: 800;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => types[props.type]}
  ${(props) => colors[props.color]}
`;

// Button.defaultProps = {
//     variation: "primary",
//     size: "large"
//   };

export default Button;
