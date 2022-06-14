import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: none;
  ${(props) => (props.isOpen ? 'display: block;' : null)}
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.gray3};
  margin: 15% auto;
  padding: 2rem;
  border-radius: ${(props) => props.theme.br.lg};
  box-shadow: ${(props) => props.theme.shadow.xl};
  width: 40rem;
  height: 30rem;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: ${(props) => props.theme.fs.xl};
    margin: 2rem 1rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  font-size: ${(props) => props.theme.fs.xl};
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
    font-size: 1.8rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
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
