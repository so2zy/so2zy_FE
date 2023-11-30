import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading: React.FC = () => {
  return (
    <StyledContainer>
      <Player
        autoplay
        loop
        style={{ height: '150px', width: '150px' }}
        src="https://lottie.host/b4f5bdd5-361b-4681-acf9-2563f2d401a6/eKpDHgV7vU.json"
      />
    </StyledContainer>
  );
};

export default Loading;

const StyledContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
