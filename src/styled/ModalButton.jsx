import Button from './Button';
import styled from 'styled-components';

const ModalButton = styled(Button)`
  background-color: ${(props) =>
    props.isModalPrimary ? props.theme.colors.brand : props.theme.colors.gray4};

  ${(props) =>
    props.isModalPrimary
      ? 'position: absolute; right: 1rem; bottom: 0;'
      : 'position: absolute; right: 15rem; bottom: 0;'}
  &:hover {
    background-color: ${(props) =>
      props.isModalPrimary
        ? props.theme.colors.brandDark
        : props.theme.colors.gray3};
  }
`;

export default ModalButton;
