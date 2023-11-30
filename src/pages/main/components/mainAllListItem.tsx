import { theme } from '@styles/theme';
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getAllProduct } from './getPlaces';
import UseIntersectionObserver from '@utils/useIntersectionObserver';
import ScrollTopBtn from '@components/common/ScrollToTop/ScrollToTop';
import { formatDate } from '@utils/useFormatDate';
import { useNavigate } from 'react-router-dom';
import { eclipsText } from '@utils/textLength';
import { MainItemProps, MainListProps } from './mainListItem';
import hotelDefaultImg from '@assets/images/hotelDefaultImg.png';

const MainAllListItem = ({ title }: MainListProps) => {
  const navigate = useNavigate();

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['title'],
    queryFn: ({ pageParam }) => getAllProduct(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastData = lastPage?.data;
      if (!lastData || lastData.length === 0) return undefined;

      return lastPageParam + 1;
    },
  });
  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  const { setTarget } = UseIntersectionObserver({
    onIntersect: handleIntersect,
    threshold: 0.5,
  });

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
    <StyledContainer>
      <StyledWrapper>
        {data &&
          data.pages?.length > 0 &&
          data.pages.map(
            (page) =>
              page?.data?.body.map((item: MainItemProps) => (
                <StyledMainAllItem key={item.id}>
                  {item.accommodationImageUrl ? (
                    <StyledAllItemImage
                      src={item.accommodationImageUrl}
                      alt="호텔 사진"
                    />
                  ) : (
                    <StyledAllItemImage src={hotelDefaultImg} alt="대체 사진" />
                  )}

                  <StyledAllItemTitle>
                    {eclipsText(item.name, 12)}
                  </StyledAllItemTitle>
                  <StyledAllItemDesc>
                    <StyledAllItemPriceList>
                      <StyledPriceSale>
                        {item.price.toLocaleString('ko-KR')}원
                      </StyledPriceSale>
                    </StyledAllItemPriceList>
                    <StyledLookBtn onClick={() => handleDetailPage(item.id)}>
                      숙소 보기
                    </StyledLookBtn>
                  </StyledAllItemDesc>
                </StyledMainAllItem>
              )),
          )}
        <ScrollTopBtn />
      </StyledWrapper>
      <div ref={(node) => setTarget(node)} />
    </StyledContainer>
  );
};

export default MainAllListItem;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.25rem;
`;

const StyledMainAllItem = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 calc(50% - 0.625rem);
  width: 32rem;
  height: 10rem;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  border: 0.5px solid ${theme.colors.gray2};

  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const StyledAllItemImage = styled.img`
  width: 10.5rem;
  border-radius: 0.625rem 0 0 0.625rem;
`;

const StyledAllItemTitle = styled.div`
  font-size: 1rem;
  margin-top: 1.2rem;
  margin-left: 1rem;
  font-weight: bold;
`;
const StyledAllItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledAllItemPriceList = styled.p`
  width: 6rem;
  position: absolute;
  bottom: 3.5rem;
  right: 1rem;
`;

const StyledPriceSale = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

const StyledLookBtn = styled.button`
  position: absolute;
  bottom: 1.05rem;
  right: 1rem;
  width: 6rem;
  font-weight: bold;
  padding: 0.6rem 0.5rem 0.4rem;
  border-radius: 0.625rem;
  background-color: ${theme.colors.navy};
  color: #fff;
  cursor: pointer;
`;
