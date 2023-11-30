import { theme } from '@styles/theme';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '@assets/images/mainLogo.svg';
import { GrLinkPrevious } from 'react-icons/gr';
import HomeIcon from '@assets/images/home.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { ReactComponent as ChevronDown } from '@assets/images/chevron-down.svg';
import { isClickedRegionState } from '@recoil/regionList';
import { Modal } from '@components/Modal';
import { ReactComponent as House } from '@assets/images/house.svg';
import { FaCartShopping } from 'react-icons/fa6';

import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {
  emailState,
  iatDatePlus9HoursState,
  isLogInSelector,
  pwState,
  refreshTokenAtom,
  tokenAtom,
  userKeyState,
  userNameState,
} from 'recoil/atom';
import jwt from 'jsonwebtoken-promisified';
import axios from 'axios';
const Header = () => {
  const isUserLoggedIn = useRecoilValue(isLogInSelector);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [userName] = useRecoilState(userNameState);
  const setUserKey = useSetRecoilState(userKeyState);
  const setUserName = useSetRecoilState(userNameState);
  const setEmail = useSetRecoilState(emailState);
  const setPw = useSetRecoilState(pwState);
  const tokenRefreshUrl = `${process.env.REACT_APP_SERVER}/v1/refresh`;

  const [iatDatePlus9Hours, setIatDatePlus9Hours] = useRecoilState(
    iatDatePlus9HoursState,
  );
  const navigate = useNavigate();
  const location = useLocation();
  const checkTokenExpiration = async () => {
    if (iatDatePlus9Hours && iatDatePlus9Hours < Date.now()) {
      try {
        const response = await axios.post(
          tokenRefreshUrl,
          {
            accessToken: token,
            refreshToken: refreshToken,
          },
          {
            headers: {
              accept: '*/*',
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.status === 201) {
          const newAccessToken = response.data.data.accessToken;
          const decodedToken = jwt.decode(newAccessToken);
          const { iat } = decodedToken;
          const iatPlus = iat * 1000 + 9 * 60 * 60 * 1000;
          setIatDatePlus9Hours(iatPlus);
          sessionStorage.setItem('iatDatePlus9Hours', newAccessToken);
          sessionStorage.setItem('accessToken', String(iatPlus));

          setToken(newAccessToken);
          console.log('재발급성공');
        } else {
          console.error('AccessToken 재발급 실패');
          handleLogOut();
        }
      } catch (error) {
        console.error('AccessToken 재발급 요청 에러:', error);
        handleLogOut();
      }
    }
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setIsClickedRegion = useSetRecoilState(isClickedRegionState); // 필터링 지역버튼 클릭 여부
  const [selectedRegion, setSelectedRegion] = useState('');
  const selectedSigungu = sessionStorage.getItem('selectedSigungu');

  const [localSearchInput, setLocalSearchInput] = useState('');

  const onInputChange = (query: string) => {
    if (query) {
      navigate(`/searchList?name=${query}`);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchInput(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sessionStorage.setItem('searchedHotel', localSearchInput);
      onInputChange(localSearchInput);
      event.currentTarget.blur();
    }
  };

  const isSearchPage =
    location.pathname === '/' || location.pathname.startsWith('/searchList');
  const isReservedPage = ['/reservation', '/confirm', '/cart'].includes(
    location.pathname,
  );
  const isSignUpOrSignIn = ['/signUp', '/signIn'].includes(location.pathname);
  if (isSignUpOrSignIn) {
    return null;
  }
  // console.log(refreshToken, token);
  const handleMainLogoClick = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/signIn');
  };

  const handleArrowLeft = () => {
    if (location.pathname === '/cart') {
      history.back();
    } else if (location.pathname === '/reservation') {
      history.back();
    } else if (location.pathname === '/confirm') {
      history.back();
    } else if (location.pathname == '/regionList') {
      history.back();
      const selectedSigunguHistory = JSON.parse(
        sessionStorage.getItem('selectedSigunguHistory') || '[]',
      ) as string[];
      if (selectedSigunguHistory.length > 0) {
        selectedSigunguHistory.pop();
        if (selectedSigunguHistory.length >= 1) {
          sessionStorage.setItem(
            'selectedSigungu',
            selectedSigunguHistory[selectedSigunguHistory.length - 1],
          );
        }
        sessionStorage.setItem(
          'selectedSigunguHistory',
          JSON.stringify(selectedSigunguHistory),
        );
      }
    } else {
      history.back();
    }
  };

  const handleCartIcon = () => {
    navigate('/cart');
  };

  const handleHomeIcon = () => {
    navigate('/');
  };

  const handleReservationText = () => {
    window.location.reload();
  };
  const resetRecoilState = useRecoilCallback(
    ({ reset }) =>
      async () => {
        // Recoil 상태 값을 초기화합니다.
        reset(userKeyState);
        reset(refreshTokenAtom);
        reset(tokenAtom);
        reset(emailState);
        reset(pwState);
        reset(userNameState);
        reset(iatDatePlus9HoursState);
      },
    [],
  );

  const handleLogOut = async () => {
    sessionStorage.clear();

    await resetRecoilState();
  };

  useEffect(() => {
    if (token) {
      const tokenCheckInterval = setInterval(() => {
        checkTokenExpiration();
      }, 1800000);
      return () => clearInterval(tokenCheckInterval);
    }
  }, []);
  useEffect(() => {
    const storedLoginState = sessionStorage.getItem('loginState');
    if (storedLoginState === 'true') {
      const storedUserKey = sessionStorage.getItem('userKey') || '';
      const storedAccessToken = sessionStorage.getItem('accessToken') || '';
      const storedRefreshToken = sessionStorage.getItem('refreshToken') || '';
      const storedEmail = sessionStorage.getItem('email') || '';
      const storedUserName = sessionStorage.getItem('userName') || '';
      setUserKey(storedUserKey);
      setRefreshToken(storedRefreshToken);
      setToken(storedAccessToken);
      setEmail(storedEmail);
      setPw('');
      setUserName(storedUserName);
    }
  }, []);

  const openModal = (type: string) => {
    if (type == '지역') {
      setIsClickedRegion(true);
    }
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setIsClickedRegion(false);
  };

  useEffect(() => {
    if (selectedSigungu !== null) {
      setSelectedRegion(selectedSigungu);
    }
  }, [selectedSigungu]);

  return (
    <>
      {isReservedPage ? (
        <StyledHeaderWhiteBox>
          <StyledHeaderWhiteContent>
            <div>
              <StyledBefore size="30" onClick={handleArrowLeft} />
            </div>
            <StyledHeaderTitle onClick={handleReservationText}>
              {location.pathname === '/cart'
                ? '장바구니'
                : location.pathname === '/reservation'
                  ? '예약'
                  : location.pathname === '/cartreservation'
                    ? '예약'
                    : ''}
            </StyledHeaderTitle>
            <StyledHeaderHomeIcon>
              <img src={HomeIcon} alt="Cart Icon" onClick={handleHomeIcon} />
            </StyledHeaderHomeIcon>
          </StyledHeaderWhiteContent>
        </StyledHeaderWhiteBox>
      ) : (
        <StyledHeaderBox>
          <StyledHeaderContent>
            {location.pathname === '/regionList' ? (
              <StyledHeaderRegionCover>
                <StyledLeftBtn size="30" onClick={handleArrowLeft} />
                <StyledHeaderRegion>{selectedRegion}</StyledHeaderRegion>
                <StyledChevronDown
                  onClick={() => {
                    openModal('지역');
                  }}
                />
                <StyledHouse onClick={handleHomeIcon} />
              </StyledHeaderRegionCover>
            ) : (
              <StyledHeaderMainLogo>
                <img src={Logo} onClick={handleMainLogoClick} />
              </StyledHeaderMainLogo>
            )}
            {isSearchPage && (
              <StyledHeaderSearchBar
                placeholder="숙소를 검색해보세요"
                value={localSearchInput}
                onChange={handleInputChange}
                onKeyPress={handleEnterPress}
              />
            )}

            <StyledHeaderRight>
              {isUserLoggedIn && (
                <StyledHeaderGreeting>{userName}님</StyledHeaderGreeting>
              )}

              {isUserLoggedIn ? (
                <StyledHeaderLogOut onClick={handleLogOut}>
                  로그아웃
                </StyledHeaderLogOut>
              ) : (
                <StyledHeaderLogIn onClick={handleLogin}>
                  로그인
                </StyledHeaderLogIn>
              )}
              <StyledHeaderCartIcon onClick={handleCartIcon} />
              {/* <StyledHeaderCartCount>0</StyledHeaderCartCount> */}
            </StyledHeaderRight>
          </StyledHeaderContent>
          <Modal isOpen={modalIsOpen} closeModal={closeModal} />
        </StyledHeaderBox>
      )}
    </>
  );
};

const sharedHeaderStyles = `
  cursor: pointer;
  margin-left: 1rem;
  white-space: nowrap;
`;
const StyledBefore = styled(GrLinkPrevious)`
  vertical-align: top;
  cursor: pointer;
`;

const StyledHeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  z-index: 1000;
  background-color: ${theme.colors.navy};
  color: white;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;
const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: auto;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledHeaderMainLogo = styled.div`
  ${sharedHeaderStyles}
  display: flex;
  width: 7.5rem;
  background-color: transparent;
  margin-right: 1rem;
  img {
    width: 100%;
  }
`;

const StyledHeaderRegionCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeaderRegion = styled.div`
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 800;
  padding: 0.375rem 0 0;
`;

const StyledHeaderSearchBar = styled.input`
  ${sharedHeaderStyles}
  outline: none;
  z-index: 2;
  background-color: transparent;
  border: 1px solid white;
  padding: 0.25rem 1rem 0;
  font-size: 1rem;
  height: 85%;
  width: 60%;
  color: white;
  box-sizing: border-box;
  font-family: 'GmarketSans', sans-serif;

  &&::placeholder {
    color: white;
    font-family: 'GmarketSans';
    src: url('./assets/fonts/GmarketSansTTFLight.ttf');
    font-weight: 500;
  }
`;

const StyledHeaderRight = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const StyledHeaderLogIn = styled.span`
  ${sharedHeaderStyles}
  cursor: pointer;
  margin-left: 1rem;
  white-space: nowrap;
`;

const StyledHeaderLogOut = styled.span`
  ${sharedHeaderStyles}
  cursor: pointer;
  margin-left: 1rem;
  white-space: nowrap;
`;

const StyledHeaderCartIcon = styled(FaCartShopping)`
  ${sharedHeaderStyles}
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1.1rem;
  margin-bottom: 0.1rem;
  position: relative;
`;

const StyledHeaderTitle = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  padding-top: 0.8rem;
`;
// const StyledHeaderCartCount = styled.div`
//   /* font-size: 0.5rem; */
//   border-radius: 3rem;
//   background-color: red;
//   position: absolute;
//   z-index: 999;
// `;

const StyledHeaderGreeting = styled.span`
  font-size: 0.8rem;
  ${sharedHeaderStyles}
  cursor: pointer;
  margin-left: 1rem;
  white-space: nowrap;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledHeaderWhiteBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  z-index: 100;
  background-color: white;
  color: black;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledHeaderWhiteContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: auto;
  width: 50%;
  height: 100%;
  font-size: 1.2rem;
  margin: 0 auto;
  @media (max-width: 1080px) {
    width: 100%;
  }
  div {
    width: 33%;
  }
  div:nth-child(2) {
    cursor: pointer;
    font-weight: 800;
    display: flex;
    justify-content: center;
  }
  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledHeaderHomeIcon = styled.div`
  color: black;
  cursor: pointer;
  img {
    width: 2rem;
  }
`;

const StyledChevronDown = styled(ChevronDown)`
  height: 1.5rem;
  fill: ${theme.colors.blue};
  margin-left: 0.5rem;
  cursor: pointer;
`;

const StyledHouse = styled(House)`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 1rem;
  cursor: pointer;
  fill: white;
`;

const StyledLeftBtn = styled(BsArrowLeft)`
  cursor: pointer;
  color: ${theme.colors.navy};
`;

export default Header;
