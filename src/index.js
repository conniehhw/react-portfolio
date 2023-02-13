import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //first component being leveraged
import reportWebVitals from './reportWebVitals';


//a query selector targetting specific ID called root. It is targeting from index.html, <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App />                     
  </React.StrictMode>
);


// we are taking the one parent component and injected into <div id="root">, renders our entire app
// we can only render ONE top level component <App /> --> need to nest like dolls
//<App /> this will house ALL components, all to be rendered at the root level

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
