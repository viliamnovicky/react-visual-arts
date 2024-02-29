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
            background: var(--color-grey-transp)
        }
    `
}

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
`


// Button.defaultProps = {
//     variation: "primary",
//     size: "large"
//   };

export default Button
