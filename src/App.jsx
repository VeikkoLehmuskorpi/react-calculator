import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Calculator from './components/Calculator';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #1A1A1A;
    padding: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const App = () => {
  return (
    <>
      <Calculator />
      <GlobalStyle />
    </>
  );
};

export default App;
