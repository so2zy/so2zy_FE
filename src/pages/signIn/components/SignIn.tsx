import { useState } from 'react';
import { theme } from '@styles/theme';
import styled from 'styled-components';
import MainTwoIcon from '@assets/mainLogoTwo.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  tokenAtom,
  refreshTokenAtom,
  emailState,
  loginState,
  pwState,
} from 'recoil/atom';
import axios from 'axios';
export const SignIn: React.FC = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [pw, setPw] = useRecoilState(pwState);
  const [signInButtonClick, setSignInButtonClick] = useState(false);
  const setLogin = useSetRecoilState(loginState);
  const signInUrl = 'http://43.202.50.38:8080/v1/login';
  const setAccessToken = useSetRecoilState(tokenAtom);
  const setRefreshToken = useSetRecoilState(refreshTokenAtom);

  const navigate = useNavigate();
  const handleSignIn = async (email: string, pw: string) => {
    const params = new URLSearchParams({
      username: email,
      password: pw,
    });
    try {
      const response = await axios.post(signInUrl, params.toString(), {
        headers: {
          accept: '*/*',
        },
      });
      console.log(response);
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        // const decodedToken = jwt.decode(accessToken);
        // console.log(decodedToken);
        console.log(accessToken);
        console.log(refreshToken);
        setRefreshToken(refreshToken);
        setAccessToken(accessToken);
        setEmail(email);
        setPw(pw);
        setLogin(true);
        navigate('/');
      } else {
        setSignInButtonClick(true);
        console.log('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      setSignInButtonClick(false);
    }
  };

  return (
    <StyledNoHeaderWrap>
      <StyledSignInContent>
        <StyledSignInLeft>
          <StyledMainLogoTwo
            onClick={() => {
              setEmail('');
              setPw('');
              navigate('/');
            }}
          >
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
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="이메일을 입력해주세요"
            />
          </StyledInputWrap>
          <StyledInputWrap>
            <div>비밀번호</div>
            <input
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
          </StyledInputWrap>
          <StyledSignInError>
            {signInButtonClick && '로그인 정보가 일치하지 않습니다.'}
          </StyledSignInError>
          <StyledSignInButton
            onClick={() => handleSignIn(email, pw)}
            disabled={!email || !pw}
          >
            로그인
          </StyledSignInButton>
          <StyledSignInGoSignUp>
            <span>계정이 없으신가요?</span>
            <span
              onClick={() => {
                setEmail('');
                setPw('');
                navigate('/signUp');
              }}
            >
              회원가입
            </span>
          </StyledSignInGoSignUp>
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
  height: 800px;
  margin: 0 auto;
  background-color: ${theme.colors.gray1};
  @media (max-width: 1080px) {
    width: 100%;
  }
`;
const StyledSignInContent = styled.div`
  display: flex;
  width: 70%;
  height: 30rem;
  margin: 0 auto;
  background-color: #f3f3f3;
  border: 1px solid #a8a8a8;
  border-radius: 20px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  @media (max-width: 1080px) {
    width: 100%;
  }
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
const StyledSignInGoSignUp = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  span:first-child {
    margin-right: 0.3rem;
    color: black;
  }
  span:last-child {
    cursor: pointer;
  }
`;
