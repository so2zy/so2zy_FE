import { theme } from '@styles/theme';
import styled from 'styled-components';
import MainTwoIcon from '@assets/mainLogoTwo.svg';
export const SignIn: React.FC = () => {
  return (
    <StyledNoHeaderWrap>
      <StyledSignInContent>
        <StyledSignInLeft>
          <StyledMainLogoTwo>
            <img src={MainTwoIcon} />
          </StyledMainLogoTwo>
        </StyledSignInLeft>
        <StyledSignInRight>
          <StyledSignInGreeting>
            <div>안녕하세요! </div>
            <div>AROOM에 오신 것을 환영합니다!</div>
          </StyledSignInGreeting>
          <StyledInputWrap>
            <div>Email</div>
            <input placeholder="이메일을 입력해주세요" />
          </StyledInputWrap>
          <StyledInputWrap>
            <div>비밀번호</div>
            <input placeholder="비밀번호를 입력해주세요" />
          </StyledInputWrap>
          <StyledSignInError>
            로그인 정보가 일치하지 않습니다.
          </StyledSignInError>
          <StyledSignInButton>로그인</StyledSignInButton>
        </StyledSignInRight>
      </StyledSignInContent>
    </StyledNoHeaderWrap>
  );
};
export const StyledNoHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  width: 1080px;
  height: calc(100vh - 10px);
  margin: 0 auto;
  background-color: ${theme.colors.gray3};
  @media (max-width: 1080px) {
    width: 100%;
  }
`;
const StyledSignInContent = styled.div`
  display: flex;
  width: 70%;
  height: 50%;
  margin: 0 auto;
  background-color: #f3f3f3;
  border: 1px solid #a8a8a8;
  border-radius: 20px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
`;
const StyledMainLogoTwo = styled.div`
  img {
    cursor: pointer;
  }
`;
const StyledSignInLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid #a8a8a8;
`;
const StyledSignInRight = styled.div`
  color: ${theme.colors.navy};
  width: 50%;
  font-weight: 700;
  padding: 3rem;
`;
const StyledSignInGreeting = styled.div`
  div {
    line-height: 1.5;
  }
`;
const StyledInputWrap = styled.div`
  margin-top: 1rem;
  div {
    padding-left: 0.5rem;
  }
  input {
    cursor: pointer;
    margin-top: 0.1rem;
    font-size: 1rem;
    width: 100%;
    outline: none;
    border: none;
    background-color: #d9d9d9;
    padding: 0.4rem 1rem;
    border-radius: 20px;
  }
`;
const StyledSignInError = styled.div`
  color: ${theme.colors.error};
  font-size: 0.8rem;
  padding-left: 0.5rem;
  margin: 1rem auto;
`;

const StyledSignInButton = styled.button`
  cursor: pointer;

  width: 100%;
  height: 2.5rem;
  background-color: ${theme.colors.navy};
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  border-radius: 10px;
`;
