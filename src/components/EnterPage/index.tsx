import React, { ChangeEvent, useState } from 'react';
import * as $ from './style';
import { isContainKorean, isCorrectUrlFormat } from '../../utils/validation';
import { useNavigate } from 'react-router-dom';
import { creatorHashState } from '../../state/creatorHashState';
import { useRecoilState } from 'recoil';
import { postRequestLinkSubmit } from '../../utils/postRequestLinkSubmit';
import Logo from '../Logo';

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
        <Logo />
        <div className="enterCardItem">
          <p className="titleText alignLeft">
            Please enter the ZEP access link.
          </p>
          <p className="alignLeft">
            We will organize the data of events and events on the map
          </p>
          <p className="alignLeft bottomMargin">
            made into indicators to make it easier to see.
          </p>
          {isVerified === false && (
            <p className="errorMessage">Invalid connection link.</p>
          )}
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
          <p className="notionLink">
            <a href="https://www.notion.so/leeyongho/ZEP-SIGHT-APP-fc998d89a36444f990667f9cac499971">
              Please check the ZEP Application&apos;s installed
            </a>
          </p>
        </div>
      </$.EnterCardContainer>
    </$.Wrapper>
  );
};

export default EnterPage;
