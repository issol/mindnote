import React from 'react';

import App from 'App';

import ReactDOM from 'react-dom';

import theme from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/global-styles';

import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './store/rootSaga';

import rootReducer from './store';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
