import React from 'react';
import Modal from 'react-modal';
import { PriceSlider } from '@components/PriceSlider';
import { SelectPeople } from '@components/SelectPeople';
import { Calendar } from '@components/Calendar';
import { Map } from 'pages/regionList/components';

import styled from 'styled-components';
import {
  isClickedPeopleState,
  isClickedPriceState,
  isClickedCalendarState,
  isClickedMapState,
} from 'recoil/searchList';
import { useRecoilValue } from 'recoil';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const isClickedPeople = useRecoilValue(isClickedPeopleState);
  const isClickedPrice = useRecoilValue(isClickedPriceState);
  const isClickedCalendar = useRecoilValue(isClickedCalendarState);
  const isClickedMap = useRecoilValue(isClickedMapState);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '25%',
      height: '35%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '1rem',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  };

  const dynamicStyles = {
    content: {
      ...customStyles.content,
      height: isClickedCalendar ? '57.5%' : isClickedMap ? '67.5% ' : '35%',
      width: isClickedMap ? '45%' : '25%',
    },
    overlay: {
      ...customStyles.overlay,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={dynamicStyles}
      contentLabel="Example Modal"
    >
      <StyledContentWrapper>
        {isClickedPrice && <PriceSlider closeModal={closeModal} />}
        {isClickedPeople && <SelectPeople closeModal={closeModal} />}
        {isClickedCalendar && <Calendar closeModal={closeModal} />}
        {isClickedMap && <Map closeModal={closeModal} />}
      </StyledContentWrapper>
    </Modal>
  );
};

export default ModalComponent;

const StyledContentWrapper = styled.div`
  flex-direction: column;
`;
