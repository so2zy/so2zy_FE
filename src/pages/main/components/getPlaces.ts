import axios from 'axios';

// export interface ImageList {
//   id: number;
//   url: string;
// }

// export interface RoomList {
//   id: number;
//   type: string;
//   price: number;
//   capacity: number;
//   maxCapacity: number;
//   checkIn: string;
//   checkOut: string;
//   stock: number;
//   url: string;
// }

export interface RegionSelectProps {
  id: string;
  sigungu: string;
  regions: string[];
}

export interface RegionModalProps {
  isOpen: boolean;
}

export const getMostSell = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER}/v2/accommodations`,
      {
        params: {
          orderCondition: 'soldCount',
        },
      },
    );
    if (res) {
      //console.log(res.data);
      return res.data;
    } else {
      //  console.log('인기 상품 목록 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFavorite = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER}/v2/accommodations`,
      {
        params: {
          orderCondition: 'likeCount',
        },
      },
    );
    if (res) {
      //  console.log('불러오기 성공');
      return res.data;
    } else {
      //  console.log('찜 상품 목록 불러오기 실패');
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllProduct = async (page: number) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER}/v2/accommodations?page=${page}`,
    );
    if (res.data) {
      // console.log('전체 숙소 조회 성공');
      return res.data;
    } else {
      //   console.log('모든 상품 받아오기 실패');
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
