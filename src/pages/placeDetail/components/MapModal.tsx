import Modal from 'react-modal';
import { VscChromeClose } from 'react-icons/vsc';

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

const MapModal = ({ isOpen, onRequestClose }: AppModalProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <VscChromeClose onClick={onRequestClose} />
        <form>지도 넣을 예정~</form>
      </Modal>
    </div>
  );
};

export default MapModal;
