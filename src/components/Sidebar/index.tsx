import React from 'react';
import * as $ from './style';
import { useRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [hash, setHash] = useRecoilState(creatorHashState);
  const navigate = useNavigate();

  return (
    <$.Wrapper>
      <p onClick={() => navigate('/home')}>Participant Insight</p>
      <p onClick={() => navigate('/home/hour')}>Participation by Hour</p>
      <p onClick={() => navigate('/home/area')}>Area Information</p>
      <p onClick={() => navigate('/home/object')}>Object Insight</p>
      <p className="bottomSection">ZEP 접속링크 : https://zep.us/play/{hash}</p>
    </$.Wrapper>
  );
};

export default Sidebar;
