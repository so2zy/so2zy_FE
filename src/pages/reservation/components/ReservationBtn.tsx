import { theme } from '@styles/theme';
import styled from 'styled-components';

const ReservationBtn = () => {
  return (
    <StyledWrapper>
      <StyledBtnText>78,500원 결제하기</StyledBtnText>
    </StyledWrapper>
  );
};

export default ReservationBtn;

export const StyledWrapper = styled.div`
  width: 48rem;
  margin: 2rem auto 1rem auto;
  border: 1px solid black;
  margin-right: 0.4rem;
  padding: 0.8rem;
  text-align: center;
  background-color: ${theme.colors.navy};
  border-radius: 0.825rem;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: ${theme.shadows.shadow3};
    opacity: 80%;
  }
`;

export const StyledBtnText = styled.p`
  color: #fff;
  font-weight: bold;
`;
