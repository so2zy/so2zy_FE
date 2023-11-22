import { theme } from '@styles/theme';
import styled from 'styled-components';

const regionSelectBtn = () => {
  return (
    <StyledWrapper>
      {/* <StyledRegionBox> */}
      <StyledRegionText>지역 선택</StyledRegionText>
      {/* </StyledRegionBox> */}
    </StyledWrapper>
  );
};

export default regionSelectBtn;

const StyledWrapper = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  margin: 1.4rem auto 1rem;
  background-color: ${theme.colors.blue};
`;

const StyledRegionText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${theme.colors.white};
`;
