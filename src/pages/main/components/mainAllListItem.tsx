import { theme } from '@styles/theme';
import { useQuery } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import {
  MainItemProps,
  MainListProps,
  getAllProduct,
  noProduct,
} from './getPlaces';
// import { useInfiniteQuery } from '@tanstack/react-query';

const MainAllListItem = ({ title }: MainListProps) => {
  const { data } = useQuery<MainItemProps[]>({
    queryKey: [title],
    queryFn: title === '전체 숙소 보기' ? getAllProduct : noProduct,
    refetchInterval: 1000,
  });
  // const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
  //   useInfiniteQuery<MainItemProps[]>({
  //     queryKey = [title],
  //     queryFn: ({ pageParam = 1 }) =>
  //       title === '전체 숙소 보기'
  //         ? getAllProduct(pageParam)
  //         : noProduct(pageParam),
  //     getNextPageParam: (lastPage, allPages) => {
  //       const totalItems = allPages.flat().length;
  //       return totalItems < lastPage.totalCount
  //         ? allPages.length + 1
  //         : undefined;
  //     },
  //   });

  //   const handleLoadMore = () => {
  //     if (hasNextPage && !isFetchingNextPage) {
  //       fetchNextPage();
  //     }
  //   };
  return (
    <StyledWraaper>
      {data &&
        data?.map((item) => (
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
