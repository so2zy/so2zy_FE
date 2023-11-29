import styled from 'styled-components';
import { theme } from '@styles/theme';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { regionListState, updateRegionListState } from '@recoil/regionList';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox: React.FC = () => {
  const latitude = 37.550091;
  const longitude = 126.99295;
  const [regionList, setRegionList] = useRecoilState(regionListState);
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById(`map`);
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 8,
    };

    const map = new window.kakao.maps.Map(container, options);

    const positions = regionList.map((region) => ({
      id: region.id,
      name: region.name,
      latlng: new window.kakao.maps.LatLng(region.latitude, region.longitude),
      price: region.price,
    }));

    for (let i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
      });

      const contentString = ReactDOMServer.renderToString(
        <a href={`/place/${positions[i].id}`}>
          <div
            style={{
              backgroundColor: '#253C59',
              borderRadius: '10px',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '40px',
              padding: '.5rem .75rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '.5rem',
                marginBottom: '.5rem',
              }}
            >
              <div style={{ paddingTop: '.25rem' }}>{positions[i].name}</div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  padding: '0 .2rem',
                  borderRadius: '.3rem',
                  color: 'black',
                }}
              >
                x
              </div>
            </div>
            <div>{positions[i].price.toLocaleString('ko-KR')}원</div>
          </div>
        </a>,
      );

      const content = document.createElement('div');
      content.innerHTML = contentString;

      // 마커를 중심으로 커스텀 오버레이를 표시하기 위해 CSS를 이용해 위치를 설정합니다
      const overlay = new window.kakao.maps.CustomOverlay({
        content: content,
        map: null,
        position: marker.getPosition(),
      });

      window.kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
      });
      const closeBtn = content.querySelector('div:last-child');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          overlay.setMap(null);
        });
      }
    }
  }, [latitude, longitude]);

  return (
    <div id="map" style={{ width: '40vw', height: '50vh', margin: '1rem 0' }} />
  );
};

export default function Map({ closeModal }: { closeModal: () => void }) {
  return (
    <StyledContainer>
      <StyledTitle>위치</StyledTitle>
      <StyledLine />
      <MapBox />
    </StyledContainer>
  );
}
const StyledContainer = styled.div``;

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
