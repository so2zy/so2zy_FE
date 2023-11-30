import axios from 'axios';

export const getCarts = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER}/v2/carts`, {
      headers: {
        'Access-Token': `${accessToken}`,
      },
    });
    if (res) {
      return res.data;
    } else {
      return [];
      console.error('데이터가 없습니다');
    }
  } catch (error) {
    console.error('장바구니 정보 조회 실패');
  }
};
