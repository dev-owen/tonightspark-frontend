import React from 'react';
import * as $ from './style';

const HomePage = () => {
  return (
    <$.Wrapper>
      <$.HomeCardContainer>
        <div className="homeCardItem">
          <p className="titleText">Please enter the ZEP access link.</p>
          <p>We will organize the data of events and events on the map</p>
          <p>made into indicators to make it easier to see.</p>
          <div className="inputItem">
            <input
              className="homeInput"
              type="text"
              placeholder="Please enter the URL."
            />
            <span className="dot"></span>
          </div>
        </div>
      </$.HomeCardContainer>
    </$.Wrapper>
  );
};

export default HomePage;
