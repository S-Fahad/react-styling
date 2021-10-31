import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Title, SubHeading } from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <SubHeading />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
