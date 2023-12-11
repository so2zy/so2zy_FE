import axios from 'axios';
import { PostPaymentProps } from '../pages/cartReservation/CartReservation.page';

export const postPayment = async (data: PostPaymentProps) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER}/v1/reservations`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': accessToken,
        },
      },
    );
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.error('결제 실패', error);
  }
};
