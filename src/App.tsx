import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import EnterPage from './components/EnterPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { creatorHashState } from './state/creatorHashState';
import { useRecoilState } from 'recoil';
import GlobalStyles from './styles/GlobalStyles';
import { useLocation } from 'react-router';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hash, setHash] = useRecoilState(creatorHashState);

  useEffect(() => {
    const localHash = localStorage.getItem('hash');
    if (localHash) setHash(localHash);

    if (!hash && !localHash) {
      setIsLoggedIn(false);
      navigate('/enter');
      return
    }

    setIsLoggedIn(true);
    navigate(location.pathname === '/' ? '/home' : location.pathname);
  }, [hash]);


  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="enter" element={<EnterPage />} />
        <Route path="home/*" element={<HomePage isLoggedIn={isLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
