import React from 'react';

import App from 'App';

import ReactDOM from 'react-dom';

import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/global-styles';

import { ThemeProvider } from 'styled-components';

import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
