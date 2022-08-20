import React from 'react';
import HomePage from './components/HomePage';
import EnterPage from './components/EnterPage';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
function App() {
  return (
    <Routes>
      <Route path="/enter" element={<EnterPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
