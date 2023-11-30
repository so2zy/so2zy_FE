import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';

const NeedLogin: React.FC = () => {
  return (
    <StyledLoginWrapper>
      <StyledLogin>로그인 정보가 없습니다.</StyledLogin>
      <StyledLoginSub>로그인을 하셔야 이용 가능합니다.</StyledLoginSub>
    </StyledLoginWrapper>
  );
};

export default NeedLogin;

const StyledLoginWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledLogin = styled.div`
  color: ${theme.colors.navy};
  font-size: ${theme.fonts.subtitle3.fontSize};
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  margin: 15rem 15rem 0 15rem;
`;

const StyledLoginSub = styled.div`
  color: ${theme.colors.navy};
  font-size: ${theme.fonts.subtitle5.fontSize};
  margin: 1rem 15rem 10rem 17rem;
`;
