import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { StyledButtonDiv, StyledTitle, ModalProps } from './CalendarModal';
import {
  StyledContainer,
  StyledContent,
  StyledCountWrapper,
  StyledCountButton,
  StyledCountNumber,
} from '@components/SelectPeople/SelectPeople';
import {
  isCheckedPeopleState,
  isClickedPeopleState,
  peopleCountState,
} from '@recoil/searchList';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '2rem',
    padding: '2.5rem',
    width: '20vw',
    height: '28vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};

const PeopleModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [peopleCount, setPeopleCount] = useRecoilState(peopleCountState);
  const [count, setCount] = useState(peopleCount);

  const handleFilter = () => {
    setPeopleCount(count);
    onRequestClose();
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncrease = () => {
    if (count < 6) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <StyledContainer>
          <StyledTitle>인원수</StyledTitle>
          <StyledContent>
            <div>인원</div>
            <StyledCountWrapper>
              <StyledCountButton onClick={handleDecrease}>-</StyledCountButton>
              <StyledCountNumber>{count}</StyledCountNumber>
              <StyledCountButton onClick={handleIncrease}>+</StyledCountButton>
            </StyledCountWrapper>
          </StyledContent>
          <StyledButtonDiv onClick={handleFilter}>
            인원 적용하기
          </StyledButtonDiv>
        </StyledContainer>
      </Modal>
    </>
  );
};

export default PeopleModal;
