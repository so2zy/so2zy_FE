import { Footer } from '@components/common/Footer';
import RegionSelectBtn from './components/regionSelectBtn';
import MainListContainer from './components/mainListContainer';
import MainAllListContainer from './components/mainAllListContainer';

export const Main: React.FC = () => {
  return (
    <>
      <RegionSelectBtn />
      <MainListContainer title={'많이 판매된 숙소'} />
      <MainListContainer title={'찜 많은 숙소'} />
      <MainAllListContainer title={'전체 숙소 보기'} />
    </>
  );
};
