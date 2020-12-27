import React from "react";
import ReactDOM from "react-dom";

import GifApp from "./GifApp";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "water.css/out/dark.min.css";

ReactDOM.render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
