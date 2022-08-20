import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';
import * as $ from './style';
import Snippet from '../Snippet';

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
    <$.Wrapper>{isLoading ? <Snippet /> : <p>Hello Landing Page</p>}</$.Wrapper>
  );
};

export default HomePage;
