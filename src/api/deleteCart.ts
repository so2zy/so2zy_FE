import { CartRoomList } from '@pages/cart/Cart.page';
import axios from 'axios';

export const deleteCart = async (data: CartRoomList) => {
  const accessToken = localStorage.getItem('accessToken');
  const baseUrl = process.env.REACT_APP_SERVER;
  try {
    const res = await axios.delete(`${baseUrl}/v2/carts`, {
      data,
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken,
      },
    });
    if (res) {
      alert('삭제 성공');
    }
  } catch (error) {
    throw new Error('삭제 실패');
  }
};
