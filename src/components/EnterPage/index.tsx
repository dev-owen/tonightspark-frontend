import React, { useState } from 'react';
import * as $ from './style';

const EnterPage = () => {
  const [isVerified, setIsVerified] = useState<boolean | undefined>();
  return (
    <$.Wrapper>
      <$.EnterCardContainer isVerified={isVerified}>
        <div className="enterCardItem">
          <p className="titleText">Please enter the ZEP access link.</p>
          <p>We will organize the data of events and events on the map</p>
          <p>made into indicators to make it easier to see.</p>
          <div className="inputItem">
            <input
              className="enterInput"
              type="text"
              placeholder="Please enter the URL."
            />
            <span className="dot"></span>
          </div>
        </div>
      </$.EnterCardContainer>
    </$.Wrapper>
  );
};

export default EnterPage;
