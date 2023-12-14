import React, { useState } from 'react';
import { theme } from '@styles/theme';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import MainTwoIcon from '@assets/images/mainLogoTwo.svg';
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
import { StyledSignWrap } from 'pages/signIn/components/SignIn';

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
  const emailCheckUrl = `${process.env.REACT_APP_SERVER}/v1/members/email/verify`;
  const signUpUrl = `${process.env.REACT_APP_SERVER}/v1/members/register`;
  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const pwCheckInputRef = React.useRef<HTMLInputElement>(null);
  const userNameInputRef = React.useRef<HTMLInputElement>(null);

  const checkEmail = async (email: string) => {
    try {
      const response = await axios.get(emailCheckUrl, {
        params: {
          email: email,
        },
        headers: {
          accept: '*/*',
        },
      });
      // console.log(response);
      if (response.status === 200) {
        //  console.log('이메일 확인완료');
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
      //console.log(email, pw, userName);
      const response = await axios.post(signUpUrl, requestBody, {
        headers: { accept: '*/*' },
      });
      //  console.log('signup response', response);
      if (response.status === 200) {
        try {
          console.log(response);
          setIsSignUp(true);
          setUserName('');
          navigate('/signIn');
          // console.log('가입에 성공했습니다.');
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
  const handleSignUpButtonClick = () => {
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
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextInputRef?: React.RefObject<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.focus();
      } else {
        // 포커스 이동이 마지막 인풋까지 완료되면 클릭 이벤트 실행
        const activeElement = document.activeElement as HTMLElement;
        activeElement?.blur(); // 현재 포커스를 해제
        handleSignUpButtonClick();
      }
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
      <StyledSignWrap>
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
              <div>이메일</div>
              <div>
                <StyledSignUpInput
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailDuplicated(undefined);
                    setEmailCheckClicked(false);
                  }}
                  placeholder="이메일 입력"
                  onKeyDown={(e) => handleKeyDown(e, passwordInputRef)}
                />
                {email ? (
                  isIdentificationValid(email) === false ? (
                    <WarnText>이메일 형식이 올바르지 않습니다</WarnText>
                  ) : isEmailDuplicated === false &&
                    emailCheckClicked === true ? (
                    <CorrectText>사용가능한 이메일입니다</CorrectText>
                  ) : isEmailDuplicated === true &&
                    emailCheckClicked === true ? (
                    <WarnText>중복된 이메일입니다</WarnText>
                  ) : (
                    <WarnText>이메일 중복체크를 해주세요</WarnText>
                  )
                ) : null}
              </div>

              <StyledDiv>
                <StyledSignUpEmailCheck onClick={handleEmailCheck}>
                  중복확인
                </StyledSignUpEmailCheck>
              </StyledDiv>
            </StyledSignUpInputWrap>
            <hr />
            <StyledSignUpInputWrap>
              <div>비밀번호</div>
              <div>
                <StyledSignUpInput
                  onKeyDown={(e) => handleKeyDown(e, pwCheckInputRef)}
                  value={pw}
                  type="password"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  placeholder="영문, 숫자 포함 6~20자"
                  ref={passwordInputRef}
                />
                {pw ? (
                  isPasswordValid(pw) ? (
                    <CorrectText>사용가능한 비밀번호입니다</CorrectText>
                  ) : (
                    <WarnText>영문, 숫자 포함 6~20자</WarnText>
                  )
                ) : null}
              </div>

              <StyledDiv></StyledDiv>
            </StyledSignUpInputWrap>
            <hr />

            <StyledSignUpInputWrap>
              <div>비밀번호 확인</div>
              <div>
                <StyledSignUpInput
                  onKeyDown={(e) => handleKeyDown(e, userNameInputRef)}
                  value={pwCheck}
                  type="password"
                  onChange={(e) => {
                    setPwCheck(e.target.value);
                  }}
                  ref={pwCheckInputRef}
                  placeholder="비밀번호 확인"
                />
                {pwCheck ? (
                  pw === pwCheck ? (
                    <CorrectText>비밀번호가 일치합니다</CorrectText>
                  ) : (
                    <WarnText>비밀번호가 일치하지 않습니다</WarnText>
                  )
                ) : null}
              </div>

              <StyledDiv></StyledDiv>
            </StyledSignUpInputWrap>
            <hr />
            <StyledSignUpInputWrap>
              <div>이름</div>
              <div>
                <StyledSignUpInput
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="이름 2~6자"
                  ref={userNameInputRef}
                  onKeyDown={(e) => handleKeyDown(e)}
                />
                {userName ? (
                  isNameValid(userName) ? (
                    <CorrectText></CorrectText>
                  ) : (
                    <WarnText>한글이름 2글자 이상 6글자 이하입니다</WarnText>
                  )
                ) : null}
              </div>
              <StyledDiv></StyledDiv>
            </StyledSignUpInputWrap>
            <hr />
            <StyledSignUpButton onClick={handleSignUpButtonClick}>
              가입 완료
            </StyledSignUpButton>
          </StyledSignUpWrap>
        </StyledNoHeaderWrap>
      </StyledSignWrap>
    </>
  );
};
export const StyledNoHeaderWrap = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.gray1};
  @media (max-width: 800px) {
    background-color: ${theme.colors.gray1};

    width: 100%;
  }
`;

const StyledSignUpWrap = styled.div`
  width: 25rem;
  height: 20rem;
  margin: 3rem auto 0 auto;
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
  justify-content: center;
  align-items: center;
  color: ${theme.colors.navy};
  font-weight: 900;
  margin-bottom: 0.8rem;
  display: flex;
  height: 2.5rem;
  div:first-child {
    font-size: 1.1rem;

    width: 33%;
    white-space: nowrap;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: end;
  }
`;
const StyledSignUpInput = styled.input`
  font-size: 1.1rem;
  color: ${theme.colors.navy};
  width: 95%;
  background-color: transparent;
  outline: none;
  border: none;
  &::placeholder {
    font-size: 1rem;
    font-family: 'GmarketSans';
    src: url('./assets/fonts/GmarketSansTTFLight.ttf');
    font-weight: 500;
  }
`;
const StyledSignUpButton = styled.button`
  padding-top: 0.15rem;
  cursor: pointer;
  width: 100%;
  height: 2.5rem;
  background-color: ${theme.colors.navy};
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  border-radius: 10px;
  margin-top: 1rem;
`;

const StyledSignUpEmailCheck = styled.button`
  padding-top: 0.25rem;
  cursor: pointer;
  width: 4rem;
  color: white;
  white-space: nowrap;
  background-color: ${theme.colors.navy};
  font-size: 0.8rem;
  height: 1.5rem;
  border-radius: 20px;
`;
const StyledDiv = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
`;

export const WarnText = styled.div`
  position: absolute;
  bottom: -0.5rem;
  left: 30%;
  font-size: 0.8rem;
  color: ${theme.colors.error};
`;

export const CorrectText = styled.div`
  position: absolute;
  bottom: -0.5rem;
  left: 30%;
  font-size: 0.8rem;
  color: ${theme.colors.success};
`;
