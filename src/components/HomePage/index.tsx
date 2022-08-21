import * as $ from './style';
import Sidebar from '../Sidebar';
import { Route, Routes } from 'react-router-dom';
import ParticipationHour from '../ParticipationHour';
import AreaInformationPage from '../AreaInformationPage';
import ParticipantInsightPage from '../ParticipantInsightPage';

const HomePage = () => {
  return (
    <$.Wrapper>
      <$.HomeContainer>
        <Sidebar />
          <Routes>
            <Route index element={<ParticipantInsightPage />} />
            <Route path="hour" element={<ParticipationHour />} />
            <Route path="area" element={<AreaInformationPage />} />
          </Routes>
      </$.HomeContainer>
    </$.Wrapper>
  );
};

export default HomePage;
