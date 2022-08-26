import { createGlobalStyle } from "styled-components";
import BgImg from "../public/clement-helardot-95YRwf6CNw8-unsplash.jpg";

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
    width: 100%;
  height: 100vh;
  user-select: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BgImg.src});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
