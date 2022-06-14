import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
