import React from 'react';
import Modal from 'react-modal';
import { PriceSlider } from '@components/PriceSlider';
import styled from 'styled-components';
// import { theme } from '@styles/theme';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: '32%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
};

const ModalComponent: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <StyledContentWrapper>
        <PriceSlider closeModal={closeModal} />
      </StyledContentWrapper>
    </Modal>
  );
};

export default ModalComponent;

const StyledContentWrapper = styled.div`
  flex-direction: column;
`;
