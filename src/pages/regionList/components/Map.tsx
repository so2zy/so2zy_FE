import styled from 'styled-components';
import { theme } from '@styles/theme';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { regionListState, updateRegionListState } from '@recoil/regionList';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import hotelDefaultImg from '@assets/images/hotelDefaultImg.png';
import { formatDate } from '@utils/useFormatDate';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox: React.FC = () => {
  const [centerLat, setCenterLat] = useState(null);
  const [centerLng, setCenterLng] = useState(null);

  const addr = sessionStorage.getItem('selectedSigungu');
  const geocoder = new window.kakao.maps.services.Geocoder();
  geocoder?.addressSearch(addr, function (result: any, status: any) {
    if (status === 'OK') {
      setCenterLat(result[0].y);
      setCenterLng(result[0].x);
      // console.log('해당 시군구의 중심좌표를 구했습니다!');
    } else if (status === 'ZERO_RESULT') {
      console.log('검색 결과가 없습니다.');
    }
  });

  const regionList = useRecoilValue(regionListState);
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 1);
  const personnel = 1;
  const startFormatDate = formatDate(startDate);
  const endFormatDate = formatDate(endDate);

  useEffect(() => {
    const container = document.getElementById(`map`);
    const options = {
      center: new window.kakao.maps.LatLng(centerLat, centerLng),
      level: 7,
    };

    const map = new window.kakao.maps.Map(container, options);

    const positions = regionList.map((region) => ({
      id: region.id,
      name: region.name,
      latlng: new window.kakao.maps.LatLng(region.latitude, region.longitude),
      price: region.price,
      image: region.accommodationImageUrl,
    }));

    for (let i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
      });

      const contentString = ReactDOMServer.renderToString(
        <div
          style={{
            backgroundColor: '#253C59',
            borderRadius: '10px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '40px',
            padding: '.5rem .75rem 0.25rem',
            display: 'grid',
            gridTemplateColumns: '0.42fr 0.58fr',
          }}
        >
          <div style={{ marginRight: '0.5rem' }}>
            <a
              href={`/place/${positions[i].id}`}
              target="_blank"
              rel="noreferrer"
            >
              {positions[i].image ? (
                <img
                  src={positions[i].image}
                  alt="호텔 이미지"
                  style={{ width: '3rem', height: '3rem' }}
                />
              ) : (
                <img
                  src={hotelDefaultImg}
                  alt="대체 이미지"
                  style={{ width: '3rem', height: '3rem' }}
                />
              )}
            </a>
          </div>

          <div>
            <div
              style={{
                display: 'flex',
                gap: '.5rem',
                marginBottom: '.5rem',
              }}
            >
              <div style={{ paddingTop: '.25rem' }}>
                <a
                  href={`/place/${positions[i].id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {positions[i].name}
                </a>
              </div>
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
            <div>
              {positions[i].price.toLocaleString('ko-KR')}
              <a
                href={`/place/${positions[i].id}`}
                target="_blank"
                rel="noreferrer"
              >
                원
              </a>
            </div>
          </div>
        </div>,
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
  }, [centerLat, centerLng]);

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
