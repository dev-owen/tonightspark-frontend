import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';
import * as $ from './style';
import Snippet from '../Snippet';
import Sidebar from '../Sidebar';
import { Route, Routes } from 'react-router-dom';
import EnterPage from '../EnterPage';
import ParticipationHour from '../ParticipationHour';
import AreaInformationPage from '../AreaInformationPage';

const HomePage = () => {
  const [hash, setHash] = useRecoilState(creatorHashState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleChange = (id: string, value: string) => {
    switch (id) {
      default:
        break;
    }
  };

  return (
    <$.Wrapper>
      {isLoading ? (
        <Snippet />
      ) : (
        <$.HomeContainer>
          <Sidebar />
          <Routes>
            <Route index element={<div>participant insight</div>} />
            <Route path="hour" element={<ParticipationHour />} />
            <Route path="area" element={<AreaInformationPage />} />
            <Route path="hour" element={<div>participation by hour</div>} />
            <Route path="object" element={<div>object insight</div>} />
          </Routes>
        </$.HomeContainer>
      )}
    </$.Wrapper>
  );
};

export default HomePage;
