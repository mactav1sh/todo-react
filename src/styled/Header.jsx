import styled from 'styled-components';

const PSpecial = styled.p`
  font-family: 'Bungee Inline', cursive;
  font-size: 3.5rem;
  span {
    color: ${(props) => props.theme.colors.brand};
    font-size: 2.4rem;
  }
`;

export default PSpecial;
