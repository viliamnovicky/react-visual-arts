import styled, { css } from "styled-components";

const Form = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: var(--color-white);
  font-size: 1.6rem;
  text-transform: uppercase;
  position: relative;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: auto;
  border-left: 3px solid var(--color-grey-transp);
  padding: 2rem;
  margin-top: 2rem;
`;

const Label = styled.label`
  padding: 2rem;
  padding-bottom: 0.5rem;
  font-weight: 800;
  font-size: 2rem;
  color: var(--color-grey);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Input = styled.input`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Dosis', sans-serif;
  border-radius: 50rem;
  border: none;
  background: var(--color-light-2);
  padding: 1rem 2rem;

  &:active, &:focus {
        outline: 1px solid var(--color-light)
    }

  &::file-selector-button {
    background: var(--color-light);
    border: none;
    border-radius: 50rem;
    padding: 1rem;
    color: var(--color-grey);
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
    width: 17rem;
    margin-top: .5rem;
    margin-right: 2rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background: var(--color-grey-transp-2)
    }
  }
`;

const Select = styled.select`
  width: 30rem;
  border-radius: 50rem;
  background: var(--color-light-2);
  border: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-size: 2rem;

  * {
    border-radius: 50rem
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  background: var(--color-white);
  font-family: 'Dosis', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  padding: 1rem;
`;

const Error = styled.span`
  color: red;
  font-size: 1.6rem;
  text-align: right;
  text-transform: uppercase;
`

export { Form, FormGroup, Label, Input, Select, Option, Error };
