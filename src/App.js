import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Routes, Route } from 'react-router-dom';
import theme from "./theme";
import HomePage from "./pages/HomePage";
import AuthorPage from "./pages/AuthorPage";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: #252836;
    outline: none;

    &::-webkit-scrollbar {
      width: 10px;
    }
      
    &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border-radius: 2em;
      background-color: #6C5ECF;
    }

    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
      display: none;
    }

    &::-webkit-scrollbar-corner {
      background-color: #252836;
    }
  }

  body, html {
    height: 100%; 
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background}; 
    font-family: 'Poppins', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author/:authorId" element={<AuthorPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
