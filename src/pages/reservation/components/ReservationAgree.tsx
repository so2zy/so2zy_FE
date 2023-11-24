import { Checkbox } from '@mui/material';
import { theme } from '@styles/theme';
import styled from 'styled-components';

const ReservationAgree = () => {
  return (
    <StyledWrapper>
      <StyledEssentialTerms>
        <span>필수 약관 동의</span>
        <StyledEssentialCheckList>
          <CheckboxContainer>
            <Checkbox />
            <CheckboxText>[필수]개인정보 제 3자 제공</CheckboxText>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox />
            <CheckboxText>[필수]개인정보 제 3자 제공</CheckboxText>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox />
            <CheckboxText>[필수]개인정보 제 3자 제공</CheckboxText>
          </CheckboxContainer>
          <StyledPayText>
            <span>※ 이용규칙, 취소 및 환불 규칙</span>에 동의하실 경우
            결제하기를 클릭해주세요
          </StyledPayText>
        </StyledEssentialCheckList>
      </StyledEssentialTerms>
    </StyledWrapper>
  );
};
export default ReservationAgree;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid black; */
`;

const StyledEssentialTerms = styled.div`
  /* border: 1px solid black; */
  margin: 2rem;
  text-align: start;
  span {
    padding-left: 0.75rem;
    font-weight: bold;
    color: ${theme.colors.navy};
  }
`;

const StyledEssentialCheckList = styled.div``;

const StyledPayText = styled.p`
  text-align: start;
  margin-left: 0.75rem;
  span {
    color: red;
    font-weight: bold;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
`;

const CheckboxText = styled.p`
  line-height: 2.65rem;
  font-weight: bold;
`;
