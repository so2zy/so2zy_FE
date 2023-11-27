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
        src="https://lottie.host/f45c56b0-e780-44d1-b5dc-1fd06a1cfe8f/fRTKW1iUlB.json"
      />
    </StyledContainer>
  );
};

export default Loading;

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
