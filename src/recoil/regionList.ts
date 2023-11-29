import { atom } from 'recoil';

export type RegionListType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  price: number;
  // ... 다른 필요한 속성들 ...
};

export const isClickedRegionState = atom({
  // 필터링 지역버튼 클릭여부
  key: 'isClickedRegionState',
  default: false,
});

export const regionListState = atom<RegionListType[]>({
  key: 'regionListState',
  default: [],
});

export const updateRegionListState = (
  oldState: RegionListType[],
  newData: RegionListType[],
) => [...oldState, ...newData];
