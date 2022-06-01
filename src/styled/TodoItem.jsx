import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
`;

export const Li = styled.li`
  background-color: ${(props) => props.theme.colors.gray5};
  cursor: pointer;
  margin: 0.4rem;
  position: relative;
  padding: 1.2rem 0.8rem;
  list-style-type: none;
  transition: 0.2s;
  font-size: ${(props) => props.theme.fs.sm};
  border-radius: ${(props) => props.theme.br.lg};
  &:hover {
    background-color: ${(props) => props.theme.colors.gray6};
  }

  ${(props) =>
    props.checked
      ? `background: #666;text-decoration: line-through; padding: 1.2rem 0.8rem 1.2rem 4rem;&:hover {
    background-color: #666;
  }`
      : ''}

  // Check Mark
  ${(props) =>
    props.checked
      ? `&:before{  content: '';
  position: absolute;
  border-color:#fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;}`
      : ''}
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 1rem;
  padding: 0.4rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  cursor: pointer;
  top: 0;
  transform: translateY(50%);
  transition: all 0.2s;
  &:hover {
    color: ${(props) => props.theme.colors.brand};
    font-size: 1.4rem;
  }
`;
export const EditButton = styled.button`
  position: absolute;
  right: 3rem;
  padding: 0.4rem;
  font-size: 1.1rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  cursor: pointer;
  top: 0;
  transform: translateY(65%);
  transition: all 0.2s;
  &:hover {
    color: ${(props) => props.theme.colors.brand};
    font-size: 1.2rem;
  }
`;
