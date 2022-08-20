import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';
import * as $ from './style';
import Snippet from '../Snippet';
import Sidebar from '../Sidebar';

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
        </$.HomeContainer>
      )}
    </$.Wrapper>
  );
};

export default HomePage;
