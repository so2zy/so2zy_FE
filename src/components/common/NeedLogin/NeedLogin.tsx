import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';

const NeedLogin: React.FC = () => {
  return (
    <StyledCard>
      <StyledLogin>
        로그인 정보가 없습니다.
        <div>로그인을 하셔야 이용 가능합니다.</div>
      </StyledLogin>
    </StyledCard>
  );
};

export default NeedLogin;

const StyledLogin = styled.div`
  color: ${theme.colors.navy};
  font-size: ${theme.fonts.subtitle3.fontSize};
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  margin-bottom: 0;
  div {
    margin-top: 1rem;
    padding-left: 2rem;
    font-size: ${theme.fonts.subtitle5.fontSize};
    color: ${theme.colors.gray3};
  }
`;

const StyledCard = styled.div`
  display: grid;
  place-items: center;
  height: 70vh;
`;
