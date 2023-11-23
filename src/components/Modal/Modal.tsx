import React from 'react';
import Modal from 'react-modal';
import { PriceSlider } from '@components/PriceSlider';
import { SelectPeople } from '@components/SelectPeople';
import styled from 'styled-components';
import { isClickedPeopleState } from 'recoil/searchList';
import { isClickedPriceState } from 'recoil/searchList';
import { useRecoilValue } from 'recoil';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: '50%',
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
  const isClickedPeople = useRecoilValue(isClickedPeopleState);
  const isClickedPrice = useRecoilValue(isClickedPriceState);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <StyledContentWrapper>
        {isClickedPrice && <PriceSlider closeModal={closeModal} />}
        {isClickedPeople && <SelectPeople closeModal={closeModal} />}
      </StyledContentWrapper>
    </Modal>
  );
};

export default ModalComponent;

const StyledContentWrapper = styled.div`
  flex-direction: column;
`;
