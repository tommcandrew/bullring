import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  html {
    height: 100%;
    width: 100%;
    color: ${colors.text};
  }

  body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
      color: ${colors.red};
      text-decoration: none;
  }
`;

export default GlobalStyle;
