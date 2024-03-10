import styled, { css } from "styled-components";

const bgs = {
  primary: css`
    background: var(--color-grey);

    label {
      color: var(--color-white);
    }
    
    input {
      background: var(--color-white-transp-2) !important;;
    }
  `,
  secondary: css`
    background: var(--color-white);

    label {
      color: var(--color-dark);
    }

    input {
      background: var(--color-light-2) !important;
    }
  `,
  none: css`
    background: transparent;
  `,
};

const borders = {
  none: css`
    border-left: none;
  `,
  primary: css`
    border-left: 3px solid var(--color-grey-transp);
  `,
  secondary: css`
    border-left: 3px solid var(--color-white-transp);
  `,
};

const Form = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  position: relative;
  overflow-x: auto;
  animation: opacity 0.5s;
  ${(props) => bgs[props.bg]}
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: auto;
  padding: 2rem;
  margin-top: 2rem;
  ${(props) => borders[props.border]}
`;

const Label = styled.label`
  padding: 2rem;
  padding-bottom: 0.5rem;
  font-weight: 800;
  font-size: 2rem;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Input = styled.input`
  font-size: 2rem;
  font-weight: 400;
  font-family: "Dosis", sans-serif;
  border-radius: 50rem;
  border: none;
  background: var(--color-white-transp);
  padding: 1rem 2rem;

  &:active,
  &:focus {
    outline: 1px solid var(--color-light);
  }

  &::file-selector-button {
    background: var(--color-light);
    border: none;
    border-radius: 50rem;
    padding: 1rem;
    color: var(--color-grey);
    font-family: "Dosis", sans-serif;
    text-transform: uppercase;
    width: 17rem;
    margin-top: 0.5rem;
    margin-right: 2rem;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: var(--color-grey-transp-2);
    }
  }
`;

const Textarea = styled.textarea`
  font-size: 2rem;
  font-weight: 400;
  font-family: "Dosis", sans-serif;
  border-radius: 2rem;
  border: none;
  background: var(--color-white-transp);
  padding: 1rem 2rem;

  &:active,
  &:focus {
    outline: 1px solid var(--color-light);
  }
`;

const Select = styled.select`
  width: 30rem;
  border-radius: 50rem;
  background: var(--color-light-2);
  border: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-family: "Dosis", sans-serif;
  font-size: 2rem;

  * {
    border-radius: 50rem;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  background: var(--color-white);
  font-family: "Dosis", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  padding: 1rem;
`;

const Error = styled.span`
  color: red;
  font-size: 1.6rem;
  text-align: right;
  text-transform: uppercase;
`;

export { Form, FormGroup, Label, Input, Select, Option, Error, Textarea };
