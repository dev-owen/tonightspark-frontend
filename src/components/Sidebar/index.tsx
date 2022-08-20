import React from 'react';
import * as $ from './style';
import { useRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';

const Sidebar = () => {
  const [hash, setHash] = useRecoilState(creatorHashState);

  return (
    <$.Wrapper>
      <p>Participant Insight</p>
      <p>Participation by Hour</p>
      <p>Area Information</p>
      <p>Object Insight</p>
      <p className="bottomSection">ZEP 접속링크 : https://zep.us/play/{hash}</p>
    </$.Wrapper>
  );
};

export default Sidebar;
