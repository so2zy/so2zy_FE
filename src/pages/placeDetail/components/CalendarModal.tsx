import Modal from 'react-modal';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { theme } from '@styles/theme';
import { StyledLine } from '../PlaceDetail.page';

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '2rem',
    padding: '2.5rem',
    width: '46%',
    height: '54%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};

const CalendarModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <StyledTitleWrapper>
          <StyledTitle>날짜 선택</StyledTitle>
        </StyledTitleWrapper>
        <StyledLine />
      </Modal>
    </>
  );
};

export default CalendarModal;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
`;

const StyledTitle = styled.span`
  margin: auto;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`;
