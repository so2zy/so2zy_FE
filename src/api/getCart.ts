import axios from 'axios';

export const getCarts = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const baseUrl = process.env.REACT_APP_SERVER;
  const res = await axios.get(`${baseUrl}/v2/carts`, {
    headers: {
      'Access-Token': `${accessToken}`,
    },
  });
  if (res) {
    return res.data;
  } else {
    throw new Error('데이터가 없습니다');
  }
};
