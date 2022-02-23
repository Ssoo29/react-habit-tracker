import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { store } from "./store";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
