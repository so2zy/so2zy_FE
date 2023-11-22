import { theme } from '@styles/theme';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const MainAllListItem = () => {
  return (
    <StyledWraaper>
      <StyledMainAllItem>
        <StyledAllItemImage></StyledAllItemImage>
        <StyledAllItemTitle>시그니엘 서울</StyledAllItemTitle>
        <StyledAllItemDesc>
          <StyledStar />
          <StyledAllItemPriceList>
            <StyledPriceOriginal>750,000원</StyledPriceOriginal>
            <StyledPriceSale>539,000원</StyledPriceSale>
          </StyledAllItemPriceList>
          <StyledLookBtn>숙소 보기</StyledLookBtn>
        </StyledAllItemDesc>
      </StyledMainAllItem>
      <StyledMainAllItem>
        {' '}
        <StyledAllItemImage></StyledAllItemImage>
        <StyledAllItemTitle>인터컨티넨탈 알펜...</StyledAllItemTitle>
        <StyledAllItemDesc>
          <StyledStar />
          <StyledAllItemPriceList>
            <StyledPriceOriginal>750,000원</StyledPriceOriginal>
            <StyledPriceSale>539,000원</StyledPriceSale>
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
