import { theme } from '@styles/theme';
import { useInfiniteQuery } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { MainItemProps, MainListProps, getAllProduct } from './getPlaces';
import UseIntersectionObserver from '@utils/useIntersectionObserver';
import ScrollTopBtn from '@components/common/ScrollToTop/ScrollToTop';
import { formatDate } from '@utils/useFormatDate';
import { useNavigate } from 'react-router-dom';

const MainAllListItem = ({ title }: MainListProps) => {
  const navigate = useNavigate();
  console.log(title);
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
              page?.data?.map((item: MainItemProps) => (
                <StyledMainAllItem key={item.id}>
                  <StyledAllItemImage src={item.accommodationImageUrl} />
                  <StyledAllItemTitle>{item.name}</StyledAllItemTitle>
                  <StyledAllItemDesc>
                    <StyledStar />
                    <StyledAllItemPriceList>
                      <StyledPriceOriginal>
                        {item.saleprice ? item.price : ''}
                      </StyledPriceOriginal>
                      <StyledPriceSale>
                        {item.saleprice ? item?.saleprice : item.price}
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
  gap: 0.625rem;
`;

const StyledMainAllItem = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 calc(50% - 0.625rem);
  width: 32rem;
  height: 16rem;
  border-radius: 1rem;
  box-shadow: ${theme.shadows.shadow2.shadow};
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const StyledAllItemImage = styled.img`
  width: 10.5rem;
  border-radius: 0.625rem;
  margin: 1rem;
`;

const StyledAllItemTitle = styled.div`
  font-size: 1rem;
  margin-top: 1.2rem;
`;
const StyledAllItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledStar = styled(FaStar)`
  position: absolute;
  color: ${theme.colors.yellow};
  top: 1.05rem;
  right: 1rem;
`;

const StyledAllItemPriceList = styled.p`
  width: 6rem;
  position: absolute;
  bottom: 3.5rem;
  right: 1rem;
`;

const StyledPriceOriginal = styled.span`
  text-decoration: line-through;
  color: ${theme.colors.gray2};
  font-size: 1rem;
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
  padding: 0.5rem;
  border-radius: 0.625rem;
  background-color: ${theme.colors.navy};
  color: #fff;
  cursor: pointer;
`;
