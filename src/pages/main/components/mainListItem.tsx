import { theme } from '@styles/theme';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
// props로 데이터 넘겨주고 틀은 찜 많은 숙소와 동일하게 가져감
const MainListItem = () => {
  return (
    <StyledWrapper>
      <StyledMainPageItem>
        <StyledItemImage></StyledItemImage>
        <StyledItemDesc>
          <StyledItemName>1. 파크 하얏트 서울</StyledItemName>
          <StyledStar />
          <StyledItemPrice>577,500원~</StyledItemPrice>
        </StyledItemDesc>
      </StyledMainPageItem>
      <StyledMainPageItem>
        <StyledItemImage></StyledItemImage>
        <StyledItemDesc>
          <StyledItemName>1. 파크 하얏트 서울</StyledItemName>
          <StyledStar />
          <StyledItemPrice>577,500원~</StyledItemPrice>
        </StyledItemDesc>
      </StyledMainPageItem>{' '}
      <StyledMainPageItem>
        <StyledItemImage></StyledItemImage>
        <StyledItemDesc>
          <StyledItemName>1. 파크 하얏트 서울</StyledItemName>
          <StyledStar />
          <StyledItemPrice>577,500원~</StyledItemPrice>
        </StyledItemDesc>
      </StyledMainPageItem>{' '}
      <StyledMainPageItem>
        <StyledItemImage></StyledItemImage>
        <StyledItemDesc>
          <StyledItemName>1. 파크 하얏트 서울</StyledItemName>
          <StyledStar />
          <StyledItemPrice>577,500원~</StyledItemPrice>
        </StyledItemDesc>
      </StyledMainPageItem>{' '}
      <StyledMainPageItem>
        <StyledItemImage></StyledItemImage>
        <StyledItemDesc>
          <StyledItemName>1. 파크 하얏트 서울</StyledItemName>
          <StyledStar />
          <StyledItemPrice>577,500원~</StyledItemPrice>
        </StyledItemDesc>
      </StyledMainPageItem>
    </StyledWrapper>
  );
};

export default MainListItem;

const StyledWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  gap: 1.125rem;
`;

const StyledMainPageItem = styled.div`
  width: 11.75rem;
  height: 13.5rem;
  /* border: 1px solid pink; */
  border-radius: 1rem;
  box-shadow: ${theme.shadows.shadow2.shadow};
  position: relative;
`;

const StyledItemImage = styled.div`
  height: 10rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background-color: ${theme.colors.gray2};
`;

const StyledItemDesc = styled.div`
  position: absolute;
`;

const StyledItemName = styled.p`
  font-weight: bold;
  /* font-size: 0.938rem; */
  font-size: 0.8rem;
  margin: 0.9rem 1.3rem 0 0.7rem;
  padding: 0;
`;

const StyledItemPrice = styled.p`
  /* font-size: 0.938rem; */
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
