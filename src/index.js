import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./service/Reducers/index";


const store = configureStore({ reducer: reducer, middleware: [thunk] });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
