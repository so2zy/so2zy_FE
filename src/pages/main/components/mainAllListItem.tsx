import { theme } from '@styles/theme';
// import { useQuery } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { MainListProps, getAllProduct } from './getPlaces';

const MainAllListItem = ({ title }: MainListProps) => {
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
  const handleLoadMore = (pages: any) => {
    if (hasNextPage) {
      fetchNextPage(pages);
      console.log(data);
    }
  };
  return (
    <StyledWraaper>
      {data &&
        data.pages.map((item) => (
          <StyledMainAllItem key={item.id}>
            <StyledAllItemImage src={item.image} />
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
              <StyledLookBtn>숙소 보기</StyledLookBtn>
            </StyledAllItemDesc>
          </StyledMainAllItem>
        ))}
      <button onClick={handleLoadMore}>더 보기</button>
    </StyledWraaper>
  );
};

export default MainAllListItem;

const StyledWraaper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const StyledMainAllItem = styled.div`
  cursor: pointer;
  display: flex;
  width: 32rem;
  height: 16rem;
  border-radius: 1rem;
  box-shadow: ${theme.shadows.shadow2.shadow};
  position: relative;
  overflow: hidden;
`;

const StyledAllItemImage = styled.img`
  width: 10.5rem;
  border-radius: 0.625rem;
  /* background-color: ${theme.colors.gray2}; */
  margin: 1rem;
`;

const StyledAllItemTitle = styled.div`
  font-size: 1rem;
  margin-top: 1.2rem;
`;
const StyledAllItemDesc = styled.div`
  /* margin-top: 1rem; */
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
