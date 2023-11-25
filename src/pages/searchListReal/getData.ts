import axios from 'axios';

export interface MainListProps {
  title: string;
}

export interface MainItemProps {
  id: number;
  ranking: number;
  name: string;
  price: string;
  saleprice?: string;
  image: string;
}

export interface RegionSelectProps {
  id: string;
  name: 'string';
  regions: string[];
}

export interface RegionModalProps {
  isOpen: boolean;
}

export const getSearchList = async () => {
  try {
    const res = await axios.get('/v1/accommodations');
    if (res) {
      return res.data;
    } else {
      console.log('검색결과 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSortList = async (orderBy: string, orderCondition: string) => {
  try {
    const res = await axios.get(
      `/v1/accommodations?orderBy=${orderBy}&orderCondition=${orderCondition}`,
    );

    if (res) {
      return res.data;
    } else {
      console.log('가격 오름차순 함수 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const nullData = () => {
  return [];
};
