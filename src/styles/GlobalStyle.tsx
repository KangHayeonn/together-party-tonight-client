import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}
  body {font-family: "Helvetica", "Arial", sans-serif;line-height: 1.5;overflow-x: hidden;}
  html,body {height:100%}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
  fieldset, img {
    border: 0 none;
  }
  button {
    border: 0 none;
    cursor: pointer;
  }
  a {
    border: 0;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
  }
  ul, li{
    padding : 0;
    margin: 0;
    list-style:none;
  }
`;

export default GlobalStyle;
