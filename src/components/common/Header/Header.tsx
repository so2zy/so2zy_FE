import { theme } from '@styles/theme';
import styled from 'styled-components';
import Logo from '@assets/mainLogo.svg';
import CartIcon from '@assets/shoppingBag.png';
import HomeIcon from '@assets/home.png';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { searchInputState } from '@recoil/searchList';

const Header = () => {
  const userName = '채민석';
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [localSearchInput, setLocalSearchInput] = useState('');
  const setSearchInput = useSetRecoilState(searchInputState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchInput(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchInput(localSearchInput);
      setLocalSearchInput('');
    }
  };
  const isSearchPage =
    location.pathname === '/' ||
    location.pathname === '/searchlist' ||
    location.pathname === '/searchlistreal';
  const isReservedPage = ['/reservation', '/confirm', '/cart'].includes(
    location.pathname,
  );
  const isSignUpOrSignIn = ['/signUp', '/signIn'].includes(location.pathname);
  if (isSignUpOrSignIn) {
    return null;
  }

  const handleMainLogoClick = () => {
    setLogin(true);
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/signIn');
  };

  const handleArrowLeft = () => {
    if (location.pathname === '/cart') {
      navigate('/placeDetail');
    } else if (location.pathname === '/reservation') {
      navigate('/cart');
    } else if (location.pathname === '/confirm') {
      navigate('/reservation');
    } else {
      navigate('/');
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
  return (
    <>
      {isReservedPage ? (
        <StyledHeaderWhiteBox>
          <StyledHeaderWhiteContent>
            <div>
              <BsArrowLeft size="40" onClick={handleArrowLeft} />
            </div>
            <div onClick={handleReservationText}>
              {location.pathname === '/cart'
                ? '장바구니'
                : location.pathname === '/reservation'
                  ? '예약'
                  : '예약확인'}
            </div>
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
                <BsArrowLeft size="40" onClick={handleArrowLeft} />
                <StyledHeaderRegion>강남/역삼/삼성</StyledHeaderRegion>
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
              {login && (
                <StyledHeaderGreeting>
                  {userName}님, 안녕하세요!
                </StyledHeaderGreeting>
              )}

              {login ? (
                <StyledHeaderLogOut onClick={() => setLogin(false)}>
                  로그아웃
                </StyledHeaderLogOut>
              ) : (
                <StyledHeaderLogIn onClick={handleLogin}>
                  로그인
                </StyledHeaderLogIn>
              )}
              <StyledHeaderCartIcon>
                <img src={CartIcon} alt="Cart Icon" onClick={handleCartIcon} />
              </StyledHeaderCartIcon>
            </StyledHeaderRight>
          </StyledHeaderContent>
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

const StyledHeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  z-index: 100;
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
  width: 1080px;
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
  margin-left: 4rem;
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
  padding: 0 1rem;
  font-size: 1rem;
  height: 85%;
  width: 60%;
  color: white;
  box-sizing: border-box;
  ::placeholder {
    color: red;
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

const StyledHeaderCartIcon = styled.span`
  ${sharedHeaderStyles}
  cursor: pointer;
  margin-left: 1rem;
  img {
    width: 2rem;
  }
`;

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
  width: 1080px;
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

export default Header;
