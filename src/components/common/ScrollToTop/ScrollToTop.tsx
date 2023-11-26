import { theme } from '@styles/theme';
import { useEffect, useState } from 'react';
import { RxPinTop } from 'react-icons/rx';
import styled from 'styled-components';

const ScrollTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  const ScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ShowBtnClick = () => {
      if (window.scrollY > 800) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', ShowBtnClick);
    return () => {
      window.removeEventListener('scroll', ShowBtnClick);
    };
  }, []);
  return (
    <>
      {showBtn && (
        <StyledWrapper onClick={ScrollToTop}>
          <RxPinTop />
        </StyledWrapper>
      )}
    </>
  );
};

export default ScrollTopBtn;

const StyledWrapper = styled.button`
  border-radius: 3rem;
  position: fixed;
  top: 50;
  right: 30%;
  width: 2rem;
  height: 2rem;
  background-color: ${theme.colors.navy};
  color: #fff;
  line-height: 0.5rem;
  cursor: pointer;
`;
