import { atom } from 'recoil';

export const priceAState = atom({
  key: 'priceAState',
  default: 0,
});

export const priceBState = atom({
  key: 'priceBState',
  default: 1000000,
});
