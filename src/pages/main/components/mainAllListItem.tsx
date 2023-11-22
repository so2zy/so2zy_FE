import { theme } from '@styles/theme';
import { useQuery } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import {
  getMostSell,
  getFavorite,
  MainListProps,
  MainItemProps,
} from './getPlaces';

const MainAllListItem = ({ title }: MainListProps) => {
  const { data } = useQuery<MainItemProps>({
    queryKey: ['getPlaces'],
    queryFn: title === '많이 판매된 숙소' ? getMostSell : getFavorite,
    refetchOnWindowFocus: false,
    refetchInterval: 1000,
  });

  return (
    <StyledWraaper>
      <StyledMainAllItem>
        <StyledAllItemImage></StyledAllItemImage>
        <StyledAllItemTitle>{data?.name}</StyledAllItemTitle>
        <StyledAllItemDesc>
          <StyledStar />
          <StyledAllItemPriceList>
            <StyledPriceOriginal>{data?.price}</StyledPriceOriginal>
            <StyledPriceSale>
              {data?.saleprice ? data?.saleprice : ''}
            </StyledPriceSale>
          </StyledAllItemPriceList>
          <StyledLookBtn>숙소 보기</StyledLookBtn>
        </StyledAllItemDesc>
      </StyledMainAllItem>
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
`;

const StyledAllItemImage = styled.div`
  width: 10.5rem;
  border-radius: 0.625rem;
  background-color: ${theme.colors.gray2};
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
