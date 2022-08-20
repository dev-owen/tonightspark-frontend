import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import EnterPage from './components/EnterPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { creatorHashState } from './state/creatorHashState';
import { useRecoilState } from 'recoil';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hash, setHash] = useRecoilState(creatorHashState);

  useEffect(() => {
    const localHash = localStorage.getItem('hash');
    if (localHash) setHash(localHash);
    if (!isLoggedIn && !hash && !localHash) {
      setIsLoggedIn(false);
      navigate('/enter');
    } else {
      setIsLoggedIn(true);
      navigate('/home');
    }
  }, [hash]);

  return (
    <Routes>
      <Route path="enter" element={<EnterPage />} />
      <Route path="home/*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
