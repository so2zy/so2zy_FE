import Modal from 'react-modal';
import { VscChromeClose } from 'react-icons/vsc';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { theme } from '@styles/theme';
import { StyledLine } from './PlaceDetail.page';

interface MapBoxProps {
  latitude: number;
  longitude: number;
}

const MapBox: React.FC<MapBoxProps> = ({ latitude, longitude }) => {
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

  return <div id="map" style={{ width: '50vw', height: '50vh' }} />;
};

export interface MapModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  latitude: number;
  longitude: number;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

declare global {
  interface Window {
    kakao: any;
  }
}

const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  onRequestClose,
  latitude,
  longitude,
}) => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const handleAfterOpen = () => {
    setIsMapVisible(true);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        onAfterOpen={handleAfterOpen}
      >
        <StyledTitleWrapper>
          <StyledTitle>위치</StyledTitle>
          <StyledClose onClick={onRequestClose} />
        </StyledTitleWrapper>
        <StyledLine />
        {isMapVisible && <MapBox latitude={latitude} longitude={longitude} />}
      </Modal>
    </>
  );
};

export default MapModal;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
`;

const StyledTitle = styled.span`
  vertical-align: top;
  display: flex;
  align-items: center;
`;

const StyledClose = styled(VscChromeClose)`
  display: flex;
  vertical-align: top;
  cursor: pointer;
`;
