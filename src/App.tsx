import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './store/rootSaga';

import rootReducer from './store';
import Root from 'router/Root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Root />
      </div>
    </Provider>
  );
}

export default App;
