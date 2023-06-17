import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}
  body {font-family: "Helvetica", "Arial", sans-serif;line-height: 1.5;}
  html,body {height:100%}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
`;

export default GlobalStyle;
