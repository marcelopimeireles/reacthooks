import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #7159c1;
    -webki-font-smoothing: antialiased !important;
    padding: 16px;
  }

  body, input, button {
    margin: 8px 8px 0 0;
    padding: 8px 16px;
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  input {
    background: #7159c1;
    border: 1px solid #fff;
    color: #fff;
  }

  ul {
    list-style: none;
    color: #fff;
    li {
      padding: 8px 0;
      text-transform: uppercase;
    }
  }

  button {
    cursor: pointer;
  }
`;
