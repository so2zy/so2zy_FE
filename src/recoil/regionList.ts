import { atom } from 'recoil';

export const isClickedRegionState = atom({
  // 필터링 지역버튼 클릭여부
  key: 'isClickedRegionState',
  default: false,
});
