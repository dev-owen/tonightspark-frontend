import React, { ChangeEvent, useState } from 'react';
import * as $ from './style';
import { isContainKorean, isCorrectUrlFormat } from '../../utils/validation';
import { useNavigate } from 'react-router-dom';
import { creatorHashState } from '../../state/creatorHashState';
import { useRecoilState } from 'recoil';

const EnterPage = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState<boolean | undefined>();
  const [url, setUrl] = useState<string>('');
  const [hash, setHash] = useRecoilState(creatorHashState);
  const [title, setTitle] = useState<string>('');

  const postRequestLinkSubmit = async (mapHash: string) => {
    await fetch(`https://zep.us/play/${mapHash}`)
      .then((response) => response.text())
      .then((html) => {
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const title = doc.getElementsByTagName('title')[0].innerHTML;
        if (title) {
          setTitle(title);
        }
        return title || '';
      })
      .catch((error) => {
        // There was an error
        console.warn('Something went wrong.', error);
      })
      .then(async (res) => {
        await fetch(`http://54.164.45.6:8080/api/v1/collect/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mapUrl: `https://zep.us/play/${mapHash}`,
            mapName: res,
          }),
        })
          .then(() => console.log('successfully login'))
          .catch((error) => {
            // There was an error
            console.warn('Something went wrong.', error);
          });
      });
  };

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
