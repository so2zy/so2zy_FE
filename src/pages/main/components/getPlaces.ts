import axios from 'axios';

export interface MainListProps {
  title: string;
}

export interface MainItemProps {
  page: number;
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  addressCode: string;
  likeCount: number;
  phoneNumber: string;
  // roomList: RoomList[];
  accommodationImageList: ImageList[];
  image: string; // 임시
  price: number;
  saleprice: number;
}
export interface ImageList {
  id: number;
  url: string;
}

export interface RoomList {
  id: number;
  type: string;
  price: number;
  capacity: number;
  maxCapacity: number;
  checkIn: string;
  checkOut: string;
  stock: number;
  url: string;
}

export interface RegionSelectProps {
  id: string;
  name: string;
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
      console.log(res.data, '숙소 조회 성공');
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
    const res = await axios.get(`/api/main/allproduct`);
    if (res) {
      console.log('전체 숙소 조회 성공');
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

export const getAllRooms = async ({ pageParam = 1 }) => {
  console.log(pageParam);
  try {
    const res = await axios.get(`/api/v1/accommodations/?pages=${pageParam}`);
    if (res) {
      console.log('숙소 조회 성공');
      return res.data;
    } else {
      console.log('모든 상품 무한 받아오기 실패');
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
