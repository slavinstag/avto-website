import React from 'react';
import ReactDOM from 'react-dom/client';
import Routerr from './Router';
import './normalize.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
  <React.StrictMode>
    <Routerr/>
  </React.StrictMode>
);


reportWebVitals();
