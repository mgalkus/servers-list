import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import App from "./components/App/";
import combineReducers from "./store/reducers";

ReactDOM.render(
  <Provider
    store={createStore(combineReducers, applyMiddleware(thunk, createLogger()))}
  >
    <App />
  </Provider>,
  document.querySelector("#root")
);
