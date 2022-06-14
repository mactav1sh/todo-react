import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 1.4rem;
    margin: 1.5rem 1rem 1rem 1rem;
    color: ${(props) => props.theme.colors.primary};
    align-self: flex-start;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: ${(props) => props.theme.fs.sm};
  font-family: inherit;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.br.xl};
  box-shadow: ${(props) => props.theme.shadow.md};
  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.shadow.xl};
  }
  width: 30rem;
`;
