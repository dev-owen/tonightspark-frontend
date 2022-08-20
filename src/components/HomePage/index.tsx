import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';
import * as $ from './style';
import Snippet from '../Snippet';
import Sidebar from '../Sidebar';
import { Route, Routes } from 'react-router-dom';
import ParticipationHour from '../ParticipationHour';
import AreaInformationPage from '../AreaInformationPage';
import ParticipantInsightPage from '../ParticipantInsightPage';
import { useLocation } from 'react-router';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [location.pathname]);

  return (
    <$.Wrapper>
      <$.HomeContainer>
        <Sidebar />
        {isLoading ? (
          <Snippet />
        ) : (
          <Routes>
            <Route index element={<ParticipantInsightPage />} />
            <Route path="hour" element={<ParticipationHour />} />
            <Route path="area" element={<AreaInformationPage />} />
          </Routes>
        )}
      </$.HomeContainer>
    </$.Wrapper>
  );
};

export default HomePage;
