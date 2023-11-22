import { theme } from '@styles/theme';
import styled from 'styled-components';

const MainAllListItem = () => {
  return (
    <StyledWraaper>
      <StyledMainAllItem>
        <StyledAllItemImage></StyledAllItemImage>
        <StyledAllItemTitle>시그니엘 서울</StyledAllItemTitle>
        <StyledAllItemDesc></StyledAllItemDesc>
      </StyledMainAllItem>
      <StyledMainAllItem>
        {' '}
        <StyledAllItemImage></StyledAllItemImage>
        <StyledAllItemTitle>인터컨티넨탈 알펜...</StyledAllItemTitle>
        <StyledAllItemDesc></StyledAllItemDesc>
      </StyledMainAllItem>
    </StyledWraaper>
  );
};

export default MainAllListItem;

const StyledWraaper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  gap: 0.625rem;
`;

const StyledMainAllItem = styled.div`
  display: flex;
  width: 32rem;
  height: 16rem;
  /* border: 1px solid black; */
  border-radius: 1rem;
  box-shadow: ${theme.shadows.shadow2.shadow};
  /* margin-bottom: 2.5rem; */
`;

const StyledAllItemImage = styled.div`
  width: 12.5rem;
  border-radius: 0.625rem;
  background-color: ${theme.colors.gray2};
  margin: 1rem;
`;

const StyledAllItemTitle = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
`;
const StyledAllItemDesc = styled.div`
  /* margin-top: 1rem; */
`;
