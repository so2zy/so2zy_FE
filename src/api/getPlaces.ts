import axios from 'axios';
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
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    throw new Error('데이터가 없습니다');
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
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    throw new Error('데이터가 없습니다');
    return [];
  }
};

export const getAllProduct = async (page: number) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER}/v2/accommodations?page=${page}`,
    );
    if (res.data) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    throw new Error('데이터가 없습니다');
    return [];
  }
};

export const noProduct = () => {
  return [];
};
