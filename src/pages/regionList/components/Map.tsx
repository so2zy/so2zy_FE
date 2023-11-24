import styled from 'styled-components';
import { theme } from '@styles/theme';
import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox: React.FC = () => {
  const latitude = 33.450701;
  const longitude = 126.570667;
  useEffect(() => {
    const container = document.getElementById(`map`);
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(latitude, longitude),
    });

    marker.setMap(map);

    console.log(map);
  }, [latitude, longitude]);

  return (
    <div id="map" style={{ width: '40vw', height: '50vh', margin: '1rem 0' }} />
  );
};

export default function Map({ closeModal }: { closeModal: () => void }) {
  const handleFilter = () => {
    closeModal();
  };

  return (
    <StyledContainer>
      <StyledTitle>위치</StyledTitle>
      <StyledLine />
      <MapBox />
      <StyledButtonDiv onClick={handleFilter}>필터 적용하기</StyledButtonDiv>
    </StyledContainer>
  );
}
const StyledContainer = styled.div``;
const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem 0 0.8rem;
  cursor: pointer;
  background-color: ${theme.colors.navy};
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.4rem;
`;

const StyledLine = styled.hr`
  color: ${theme.colors.gray3};
  margin: 1rem 0;
`;
