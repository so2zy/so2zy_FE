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
        src="https://lottie.host/13fb509a-6f6a-4b4d-82ae-249fdb3bd378/NGquuXZ1AN.json"
      />
    </StyledContainer>
  );
};

export default NotFound;

const StyledContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
