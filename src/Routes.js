import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import App from './App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default RoutesComponent;
