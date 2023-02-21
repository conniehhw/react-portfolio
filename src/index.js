import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; //first component being leveraged

//a query selector targetting specific ID called root. It is targeting from index.html, <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
