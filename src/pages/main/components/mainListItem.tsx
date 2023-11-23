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
const MainListItem = ({ title }: MainListProps) => {
  const { data } = useQuery<MainItemProps[]>({
    queryKey: [title],
    queryFn: title === '많이 판매된 숙소' ? getMostSell : getFavorite,
    refetchInterval: 1000,
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
              {item.id}. {item.name}
            </StyledItemName>
            <StyledStar />
            <StyledItemPrice>{item.price}~</StyledItemPrice>
          </StyledItemDesc>
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
  height: 13.5rem;
  border-radius: 1rem;
  box-shadow: ${theme.shadows.shadow1.shadow};
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const StyledItemImage = styled.img`
  width: 100%;
  height: 10rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const StyledItemDesc = styled.div`
  position: absolute;
`;

const StyledItemName = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0.9rem 1.3rem 0 0.7rem;
  padding: 0;
`;

const StyledItemPrice = styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
`;

export const StyledStar = styled(FaStar)`
  color: ${theme.colors.yellow};
  position: absolute;
  top: 0.6rem;
  right: 0;
`;
