import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import EnterPage from './components/EnterPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoggedIn) navigate('/enter');
    else navigate('/');
  }, []);

  return (
    <Routes>
      <Route path="/enter" element={<EnterPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
