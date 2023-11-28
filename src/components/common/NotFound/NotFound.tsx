import React from 'react';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const NotFound: React.FC = () => {
  return (
    <StyledContainer>
      <Player
        autoplay
        loop
        style={{ height: '300px', width: '300px' }}
        src="https://lottie.host/2397a663-2e03-4002-a2bb-f1ef43dadb8d/fS8MX94IHw.json"
      />
    </StyledContainer>
  );
};

export default NotFound;

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
