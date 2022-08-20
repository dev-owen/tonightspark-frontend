import React from 'react';
import { useSetRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';

const HomePage = () => {
  const setCreatorHash = useSetRecoilState(creatorHashState);

  const handleChange = (id: string, value: string) => {
    switch (id) {
      case 'creatorHash':
        setCreatorHash(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p>Hello Landing Page</p>
    </div>
  );
};

export default HomePage;
