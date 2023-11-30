import { theme } from '@styles/theme';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getMostSell, getFavorite } from './getPlaces';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { eclipsText } from '@utils/textLength';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@utils/useFormatDate';
import hotelDefaultImg2 from '@assets/images/hotelDefaultImg2.png';

export interface MainListProps {
  title: string;
  data?: {
    body: MainItemProps[];
  };
}

export interface MainItemProps {
  page: number;
  size: number;
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  addressCode: string;
  likeCount: number;
  phoneNumber: string;
  accommodationImageUrl: string;
  price: number;
}

const MainListItem = ({ title }: MainListProps) => {
  const navigate = useNavigate();
  const { data } = useQuery<MainListProps>({
    queryKey: [title],
    queryFn: title === '많이 판매된 숙소' ? getMostSell : getFavorite,
  });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  const handleDetailPage = (selectedId: number) => {
    const startDate = new Date();
    const endDate = new Date();
    const personnel = 1;
    endDate.setDate(endDate.getDate() + 1);

    navigate(`/place/${selectedId}`, {
      state: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        personnel: personnel,
      },
    });
  };

  return (
    <StyledWrapper {...settings}>
      {data &&
        data.data &&
        data.data.body.map((item, index) => (
          <StyledMainPageItem
            key={item.id}
            onClick={() => handleDetailPage(item.id)}
          >
            {item.accommodationImageUrl ? (
              <StyledItemImage
                src={item.accommodationImageUrl}
                alt="호텔 사진"
              />
            ) : (
              <StyledItemImage src={hotelDefaultImg2} alt="대체 사진" />
            )}

            <StyledItemDesc>
              <StyledItemName>
                {index + 1}. {eclipsText(item.name, 10)}
              </StyledItemName>
              <StyledItemPrice>
                {item.price.toLocaleString('ko-KR')}원 ~
              </StyledItemPrice>
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
    color: ${theme.colors.navy};
    width: 4rem;
    height: 4rem;
    z-index: 999;
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
  overflow: hidden;
`;

const StyledMainPageItem = styled.div`
  width: 9.75rem;
  height: 10.5rem;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  border: 0.5px solid ${theme.colors.gray2};

  position: relative;
  cursor: pointer;
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
`;

const StyledItemPrice = styled.p`
  padding: 0.25rem 0.9rem;
  font-size: 0.8rem;
`;
