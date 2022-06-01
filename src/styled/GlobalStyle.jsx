import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: ${(props) => props.theme.colors.gray3};;  
  color:${(props) => props.theme.colors.primary};
font-family: 'Open Sans', sans-serif; 
  line-height: 1.6;
}
html{
  font-size: 62.5%;
}
`;

export default GlobalStyle;
