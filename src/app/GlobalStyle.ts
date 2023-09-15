import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.color};
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    transition: .5s;
  }

  main {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`