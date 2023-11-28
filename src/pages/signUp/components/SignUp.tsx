import { useState } from 'react';
import { theme } from '@styles/theme';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import MainTwoIcon from '@assets/mainLogoTwo.svg';
import { userNameState, emailState, pwState } from 'recoil/atom';
import {
  // debounce,
  // isIdentificationPasswordValid,
  isNameValid,
  isIdentificationValid,
  isPasswordValid,
} from '@utils/registerFunction';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Styled } from 'pages/signIn/components/SignIn';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [pw, setPw] = useRecoilState(pwState);
  const [emailCheckClicked, setEmailCheckClicked] = useState(false);
  const [pwCheck, setPwCheck] = useState('');
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState<
    boolean | undefined
  >(undefined);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const emailCheckUrl = 'http://43.202.50.38:8080/v1/members';
  const signUpUrl = 'http://43.202.50.38:8080/v1/members/register';

  const checkEmail = async (email: string) => {
    try {
      const response = await axios.get(`${emailCheckUrl}/email/verify`, {
        params: {
          email: email,
        },
        headers: {
          accept: '*/*',
        },
      });
      console.log(response);
      if (response.status === 200) {
        console.log('이메일 확인완료');
        setIsEmailDuplicated(false);
      }
    } catch (error: unknown) {
      console.error('이메일 중복확인 에러:', error);
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          setIsEmailDuplicated(true);
          console.error('서버 응답:', error.response?.data?.detail);
        }
      }
    }
  };

  const handleSignUp = async (
    email: string,
    pw: string,
    userName: string,
  ): Promise<void> => {
    try {
      const requestBody = {
        email: email,
        password: pw,
        name: userName,
      };
      console.log(email, pw, userName);
      const response = await axios.post(signUpUrl, requestBody, {
        headers: { accept: '*/*' },
      });
      console.log('signup response', response);
      if (response.status === 200) {
        try {
          console.log(response);
          setIsSignUp(true);
          setUserName('');
          navigate('/signIn');
          console.log('가입에 성공했습니다.');
        } catch (error) {
          console.error('유저 데이터 업로드를 실패했습니다 : ', error);
        }
      } else {
        console.error('회원가입에 실패했습니다 :', response.data.message);
        window.alert(
          '서버와의 연결이 불안정 합니다. 잠시후 다시 시도해 주세요.',
        );
      }
    } catch (error) {
      console.error('회원가입 중 서버와의 에러가 발생했습니다 :', error);
      window.alert(
        '서버와의 연결이 불안정 합니다.\n잠시후 다시 시도해 주세요.',
      );
    }
  };
  const handleSignUpButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailCheckClicked === false) {
      alert('이메일 중복확인을 해주세요');
    } else if (
      isEmailDuplicated === true ||
      isPasswordValid(pw) === false ||
      pw !== pwCheck ||
      isNameValid(userName) === false
    ) {
      alert('입력정보를 다시확인해주세요');
    } else {
      handleSignUp(email, pw, userName);
    }
  };

  const handleEmailCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isIdentificationValid(email)) {
      setEmailCheckClicked(true);
      checkEmail(email);
    }
  };

  return isSignUp ? null : (
    <>
      <Styled>
        <StyledNoHeaderWrap>
          <StyledMainLogoTwo
            onClick={() => {
              setEmail('');
              setPw('');
              navigate('/');
            }}
          >
            <img src={MainTwoIcon} />
          </StyledMainLogoTwo>
          <StyledSignUpWrap>
            <StyledSignUpInputWrap>
              <span>이메일</span>
              <StyledSignUpInput
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailDuplicated(undefined);
                  setEmailCheckClicked(false);
                }}
                placeholder="이메일 입력"
              />
              {email ? (
                isIdentificationValid(email) === false ? (
                  <WarnText>이메일 형식이 올바르지 않습니다</WarnText>
                ) : isEmailDuplicated === false &&
                  emailCheckClicked === true ? (
                  <CorrectText>사용가능한 이메일입니다</CorrectText>
                ) : isEmailDuplicated === true && emailCheckClicked === true ? (
                  <WarnText>중복된 이메일입니다</WarnText>
                ) : (
                  <WarnText>이메일 중복체크를 해주세요</WarnText>
                )
              ) : null}
              <StyledSignUpEmailCheck onClick={handleEmailCheck}>
                중복확인
              </StyledSignUpEmailCheck>
            </StyledSignUpInputWrap>
            <hr />
            <StyledSignUpInputWrap>
              <span>비밀번호</span>
              <StyledSignUpInput
                value={pw}
                type="password"
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                placeholder="영문, 숫자 포함 6~20자"
              />
              {pw ? (
                isPasswordValid(pw) ? (
                  <CorrectText>사용가능한 비밀번호입니다</CorrectText>
                ) : (
                  <WarnText>영문, 숫자 포함 6~20자</WarnText>
                )
              ) : null}
              <StyledDiv></StyledDiv>
            </StyledSignUpInputWrap>
            <hr />

            <StyledSignUpInputWrap>
              <span>비밀번호 확인</span>
              <StyledSignUpInput
                value={pwCheck}
                type="password"
                onChange={(e) => {
                  setPwCheck(e.target.value);
                }}
                placeholder="비밀번호 확인"
              />
              {pwCheck ? (
                pw === pwCheck ? (
                  <CorrectText>비밀번호가 일치합니다</CorrectText>
                ) : (
                  <WarnText>비밀번호가 일치하지 않습니다</WarnText>
                )
              ) : null}
              <StyledDiv></StyledDiv>
            </StyledSignUpInputWrap>
            <hr />
            <StyledSignUpInputWrap>
              <span>이름</span>
              <StyledSignUpInput
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="이름 2~6자"
              />
              {userName ? (
                isNameValid(userName) ? (
                  <CorrectText></CorrectText>
                ) : (
                  <WarnText>한글이름 2글자 이상 6글자 이하입니다</WarnText>
                )
              ) : null}
              <StyledDiv></StyledDiv>
            </StyledSignUpInputWrap>
            <hr />
            <StyledSignUpButton onClick={handleSignUpButtonClick}>
              가입 완료
            </StyledSignUpButton>
          </StyledSignUpWrap>
        </StyledNoHeaderWrap>
      </Styled>
    </>
  );
};
export const StyledNoHeaderWrap = styled.div`
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.gray1};
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
  position: relative;
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
  cursor: pointer;
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
  cursor: pointer;
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

export const WarnText = styled.div`
  position: absolute;
  bottom: -0.5rem;
  left: 35%;
  font-size: 0.9rem;
  color: ${theme.colors.error};
`;

export const CorrectText = styled.div`
  position: absolute;
  bottom: -0.5rem;
  left: 35%;
  font-size: 0.9rem;
  color: ${theme.colors.success};
`;
