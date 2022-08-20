import React, { ChangeEvent, useState } from 'react';
import * as $ from './style';
import { isContainKorean, isCorrectUrlFormat } from '../../utils/validation';

const EnterPage = () => {
  const [isVerified, setIsVerified] = useState<boolean | undefined>();
  const [url, setUrl] = useState<string>('');

  const handleChange = (id: string, value: string) => {
    switch (id) {
      case 'url':
        if (!isContainKorean(value)) {
          if (value === '') setIsVerified(undefined);
          else if (isCorrectUrlFormat(value)) setIsVerified(true);
          else setIsVerified(false);
          setUrl(value);
        }
        break;
      default:
        break;
    }
  };

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
              value={url}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChange('url', event.target.value)
              }
            />
            <button>Enter</button>
          </div>
        </div>
      </$.EnterCardContainer>
    </$.Wrapper>
  );
};

export default EnterPage;
