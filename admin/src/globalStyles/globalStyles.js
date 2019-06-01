import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: white;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
    color: #5F6368;
  }

  input:focus {
    outline: none !important;
  }
`;
