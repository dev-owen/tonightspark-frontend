import React, { ChangeEvent, useState } from 'react';
import * as $ from './style';
import { isContainKorean, isCorrectUrlFormat } from '../../utils/validation';
import { useNavigate } from 'react-router-dom';
import { creatorHashState } from '../../state/creatorHashState';
import { useRecoilState } from 'recoil';
import { postRequestLinkSubmit } from '../../utils/postRequestLinkSubmit';

const EnterPage = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState<boolean | undefined>();
  const [url, setUrl] = useState<string>('');
  const [hash, setHash] = useRecoilState(creatorHashState);

  const handleChange = (id: string, value: string) => {
    switch (id) {
      case 'changeUrl':
        if (!isContainKorean(value)) {
          if (value === '') setIsVerified(undefined);
          else if (isCorrectUrlFormat(value)) setIsVerified(true);
          else setIsVerified(false);
          setUrl(value);
        }
        break;
      case 'submitUrl':
        setHash(url.split('play/')[1]);
        localStorage.setItem('hash', url.split('play/')[1]);
        postRequestLinkSubmit(url.split('play/')[1]).then(() =>
          navigate('/home'),
        );
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
                handleChange('changeUrl', event.target.value)
              }
            />
            <button
              disabled={!isVerified}
              onClick={() => handleChange('submitUrl', '')}
            >
              Enter
            </button>
          </div>
        </div>
      </$.EnterCardContainer>
    </$.Wrapper>
  );
};

export default EnterPage;
