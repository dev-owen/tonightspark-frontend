import { atom } from 'recoil';

export const creatorHashState = atom<string>({
  key: 'creatorHash',
  default: '',
});
