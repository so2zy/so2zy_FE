import axios from 'axios';

export interface MainListProps {
  title: string;
}

export interface MainItemProps {
  id: number;
  name: string;
  price: string;
  latitude?: number;
  longitude?: number;
  saleprice?: string;
  accommodationImageLists: string[];
  likeCount: number;
  phoneNumber: number;
}

export interface RegionSelectProps {
  id: string;
  name: 'string';
  regions: string[];
}

export interface RegionModalProps {
  isOpen: boolean;
}

export const getRegionList = async () => {
  try {
    const res = await axios.get('/api/main/selectregion');
    if (res) {
      return res.data;
    } else {
      console.log('지역 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMostSell = async () => {
  try {
    const res = await axios.get('/api/main/mostsell');
    if (res) {
      return res.data;
    } else {
      console.log('인기 상품 목록 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFavorite = async () => {
  try {
    const res = await axios.get('/api/main/favorite');
    if (res) {
      return res.data;
    } else {
      console.log('찜 상품 목록 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllItems = async ({ pageParam = 0 }) => {
  console.log(pageParam);
  try {
    const res = await axios.get('/api/main/allproduct?page=' + pageParam);
    if (res) {
      return res.data;
    } else {
      console.log('모든 상품 받아오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllProduct = async () => {
  try {
    const res = await axios.get('/api/main/allproduct');
    if (res) {
      return res.data;
    } else {
      console.log('모든 상품 받아오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const noProduct = () => {
  return [];
};
