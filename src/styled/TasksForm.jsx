import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

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

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.brand};
  border-radius: 8px;
  border-style: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: inline-block;
  font-weight: ${(props) => props.theme.fw.b};
  line-height: 20px;
  list-style: none;
  margin: 2rem 0 1rem 0;
  outline: none;
  padding: 1rem 4rem;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.brandDark};
  }
`;
