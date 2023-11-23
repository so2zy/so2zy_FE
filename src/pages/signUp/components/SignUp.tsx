import { theme } from '@styles/theme';
import styled from 'styled-components';
import MainTwoIcon from '@assets/mainLogoTwo.svg';
export const SignUp: React.FC = () => {
  return (
    <>
      <StyledNoHeaderWrap>
        <StyledMainLogoTwo>
          <img src={MainTwoIcon} />
        </StyledMainLogoTwo>
        <StyledSignUpWrap>
          <StyledSignUpInputWrap>
            <span>이메일</span>
            <StyledSignUpInput placeholder="이메일 입력" />
            <StyledSignUpEmailCheck>중복확인</StyledSignUpEmailCheck>
          </StyledSignUpInputWrap>
          <hr />
          <StyledSignUpInputWrap>
            <span>비밀번호</span>
            <StyledSignUpInput placeholder="영문, 숫자 포함 6~20자" />
            <StyledDiv></StyledDiv>
          </StyledSignUpInputWrap>
          <hr />

          <StyledSignUpInputWrap>
            <span>비밀번호 확인</span>
            <StyledSignUpInput placeholder="비밀번호 확인" />
            <StyledDiv></StyledDiv>
          </StyledSignUpInputWrap>
          <hr />
          <StyledSignUpInputWrap>
            <span>이름</span>
            <StyledSignUpInput placeholder="한글, 영문 포함 2~15자" />
            <StyledDiv></StyledDiv>
          </StyledSignUpInputWrap>
          <hr />
          <StyledSignUpButton>가입 완료</StyledSignUpButton>
        </StyledSignUpWrap>
      </StyledNoHeaderWrap>
    </>
  );
};
export const StyledNoHeaderWrap = styled.div`
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  width: 1080px;
  height: calc(100vh - 10px);
  margin: 0 auto;
  background-color: ${theme.colors.gray3};
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledSignUpWrap = styled.div`
  width: 60%;
  height: 20rem;
  margin: 4rem auto 0 auto;
`;
const StyledMainLogoTwo = styled.div`
  text-align: center;
  img {
    margin-top: 3rem;
    width: 15rem;
    cursor: pointer;
  }
`;
const StyledSignUpInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.navy};
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 0.8rem;
  display: flex;
  height: 3rem;
  span {
    display: inline-block;
    width: 10rem;
    white-space: nowrap;
  }
`;
const StyledSignUpInput = styled.input`
  font-size: 1.2rem;
  color: ${theme.colors.navy};
  width: 40%;
  background-color: transparent;
  outline: none;
  border: none;
`;
const StyledSignUpButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: ${theme.colors.navy};
  color: white;
  font-size: 1.6rem;
  font-weight: 900;
  border-radius: 10px;
  margin-top: 2rem;
`;

const StyledSignUpEmailCheck = styled.button`
  width: 6rem;
  color: white;
  white-space: nowrap;
  background-color: ${theme.colors.navy};
  font-size: 1.1rem;
  height: 2rem;
  border-radius: 20px;
`;
const StyledDiv = styled.div`
  width: 6rem;
`;
