import React from 'react';
import App from './App';
import './normalize.css';
import About from './About/About';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';


function Routerr() {

  return (
    <Router>
    

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
        </Routes>
     
    </Router>
  );
}

export default Routerr;