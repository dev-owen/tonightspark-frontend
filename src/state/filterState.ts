import { atom } from 'recoil';

export const ROLES = {
  GUEST: 'GUEST',
  Member: 'Member',
  Staff: 'Staff',
  Editor: 'Editor',
  Manager: 'Manager',
  Owner: 'Owner',
};

export const filterState = atom<string[]>({
  key: 'filterState',
  default: Object.keys(ROLES),
});
