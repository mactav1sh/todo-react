import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 55rem;
  min-width: 20rem;
  margin: 8rem auto;
  background-color: ${(props) => props.theme.colors.gray4};
  padding: 1.8rem;
  box-shadow: ${(props) => props.theme.shadow.lg};
  border-radius: ${(props) => props.theme.br.xl};
  overflow: auto;
  overflow-x: hidden;

  @media (min-width: 25em) {
    width: 35rem;
  }
`;

const PageContainer = ({ children }) => {
  return <Div> {children} </Div>;
};

export default PageContainer;
