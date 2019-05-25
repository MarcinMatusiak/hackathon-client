import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  font-family: 'Ubuntu', sans-serif;
}
`;

export default GlobalStyles;
