import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: darkgray;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;