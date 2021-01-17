import React from "react";
import { Provider } from "react-redux";
import { rootSaga } from "./store/rootSaga";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store";
import Root from "router/Root";

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
