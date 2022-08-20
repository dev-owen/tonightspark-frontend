import React from 'react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
