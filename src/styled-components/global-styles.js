import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  background-color: rgba(243, 243, 243, 0.849);
  font-size: 2rem;
  line-height: 2;
}

html {
  font-size: 62.5%;
}

`;
