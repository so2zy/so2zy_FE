import { theme } from '@styles/theme';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import {
  MainListProps,
  MainItemProps,
  getMostSell,
  getFavorite,
} from './getPlaces';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { eclipsText } from '@utils/textLength';
const MainListItem = ({ title }: MainListProps) => {
  const { data } = useQuery<MainItemProps[]>({
    queryKey: [title],
    queryFn: title === '많이 판매된 숙소' ? getMostSell : getFavorite,
    // refetchInterval: 1000,
  });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <StyledWrapper {...settings}>
      {data?.map((item) => (
        <StyledMainPageItem key={item.id}>
          <StyledItemImage src={item.image} alt="호텔 사진" />
          <StyledItemDesc>
            <StyledItemName>
              {item.id}. {eclipsText(item.name, 8)}
            </StyledItemName>
            <StyledItemPrice>{item.price}~</StyledItemPrice>
          </StyledItemDesc>
          {item.like ? <StyledStar /> : <StyledNoStar />}
        </StyledMainPageItem>
      ))}
    </StyledWrapper>
  );
};

export default MainListItem;

const StyledWrapper = styled(Slider)`
  .slick-prev,
  .slick-next {
    background-color: ${theme.colors.navy};
  }
  border: none;
  .slick-list {
    margin-right: -1.125rem;
    background: transparent;
  }
  .slick-slide {
    padding-right: 1.125rem;
    background: transparent;
  }
  display: flex;
`;

const StyledMainPageItem = styled.div`
  width: 11.75rem;
  height: 10.5rem;
  border-radius: 1rem;
  box-shadow: ${theme.shadows.shadow1.shadow};
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const StyledItemImage = styled.img`
  width: 100%;
  height: 7rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const StyledItemDesc = styled.div`
  position: absolute;
  text-align: start;
  margin: 0.8rem 0.5rem;
`;

const StyledItemName = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  padding-bottom: 0.2rem;
  /* margin: 0.9rem 1.3rem 0 0.7rem; */
`;

const StyledItemPrice = styled.p`
  font-size: 0.8rem;
`;

export const StyledStar = styled(FaStar)`
  color: ${theme.colors.yellow};
  position: absolute;
  top: 7.5rem;
  right: 0.2rem;
`;

const StyledNoStar = styled(StyledStar)`
  color: ${theme.colors.gray2};
`;
