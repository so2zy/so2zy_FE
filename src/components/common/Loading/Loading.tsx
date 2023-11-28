import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading: React.FC = () => {
  return (
    <StyledContainer>
      <Player
        autoplay
        loop
        style={{ height: '300px', width: '300px' }}
        src="https://lottie.host/24b41b2b-c48c-46a8-a56a-a3abb900b852/byDgdEX64z.json"
      />
    </StyledContainer>
  );
};

export default Loading;

const StyledContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
