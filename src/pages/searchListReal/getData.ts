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
      console.log('getSortList', res.data);
      return res.data;
    } else {
      console.log('정렬 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getNameFilterList = async (name: string) => {
  try {
    const res = await axios.get(`/v1/accommodations?name=${name}`);
    if (res) {
      console.log('getNameFilterList', res.data);
      return res.data;
    } else {
      console.log('이름 필터링 불러오기 실패');
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
