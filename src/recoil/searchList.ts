import { atom } from 'recoil';

export const priceAState = atom({
  key: 'priceAState',
  default: 0,
});

export const priceBState = atom({
  key: 'priceBState',
  default: 1000000,
});

export const isCheckedPriceState = atom({
  // 가격 필터링 여부
  key: 'isCheckedPriceState',
  default: false,
});

export const isCheckedPeopleState = atom({
  // 인원수 필터링 여부
  key: 'isCheckedPeopleState',
  default: false,
});

export const isClickedPriceState = atom({
  // 필터링 가격버튼 클릭여부
  key: 'isClickedPriceState',
  default: false,
});
export const isClickedPeopleState = atom({
  // 필터링 인원수버튼 클릭여부
  key: 'isClickedPeopleState',
  default: false,
});

export const peopleCountState = atom({
  key: 'peopleCountState',
  default: 1,
});