import Modal from 'react-modal';
import { VscChromeClose } from 'react-icons/vsc';
// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export interface AppModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
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
interface MapBoxProps {}

const MapBox: React.FC<MapBoxProps> = () => {
  useEffect(() => {
    const container = document.getElementById(`map`);
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return <div id="map" style={{ width: '100vw', height: '100vh' }} />;
};

const MapModal: React.FC<AppModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <VscChromeClose onClick={onRequestClose} />
        <MapBox />
      </Modal>
    </div>
  );
};

export default MapModal;
