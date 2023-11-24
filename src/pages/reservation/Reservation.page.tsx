import ReservationAgree from './components/ReservationAgree';
import ReservationBtn from './components/ReservationBtn';
import ReservationDesc from './components/ReservationDesc';

export const Reservation: React.FC = () => {
  return (
    <>
      <ReservationDesc />
      <ReservationAgree />
      <ReservationBtn />
    </>
  );
};
