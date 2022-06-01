import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = ({ children }) => {
  return <ContainerStyled> {children} </ContainerStyled>;
};

export default Container;
