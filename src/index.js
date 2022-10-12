import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18next";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { BrowserRouter } from "react-router-dom";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
