import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"


import './index.css';
import App from './App';
import Context from './Context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// root.render(
//   <Context.Provider value={data}>
//     <App/>
//   </Context.Provider>
// )
// reportWebVitals();