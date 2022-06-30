import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/screens/home/Home';
import Details from './screens/details/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </Router>
);


