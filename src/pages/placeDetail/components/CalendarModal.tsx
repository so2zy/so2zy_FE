import Modal from 'react-modal';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { theme } from '@styles/theme';
import { StyledLine } from '../PlaceDetail.page';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { subDays } from 'date-fns';
import {
  startDateState,
  endDateState,
  startStringState,
  endStringState,
} from 'recoil/searchList';
import { useSetRecoilState } from 'recoil';

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
    width: '20vw',
    height: '51vh',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};

const CalendarModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const setGlobalStartDate = useSetRecoilState(startDateState);
  const setGlobalEndDate = useSetRecoilState(endDateState);

  const setGlobalStartString = useSetRecoilState(startStringState);
  const setGlobalEndString = useSetRecoilState(endStringState);

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleFilter = () => {
    if (startDate && endDate) {
      setGlobalStartDate(startDate);
      setGlobalEndDate(endDate);
      setGlobalStartString(startDate.toLocaleDateString('ko-KR'));
      setGlobalEndString(endDate.toLocaleDateString('ko-KR'));
      console.log(startDate.toLocaleDateString('ko-KR'));
    }
    onRequestClose();
  };

  const onChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <StyledTitle>날짜</StyledTitle> <StyledLine />
        <StyledWrapper>
          <DatePicker
            locale={ko}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            minDate={subDays(new Date(), 0)}
            onChange={onChange}
            isClearable={true}
            inline
          />
        </StyledWrapper>
        <StyledButtonDiv onClick={handleFilter}>날짜 적용하기</StyledButtonDiv>
      </Modal>
    </>
  );
};

export default CalendarModal;

export const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin-top: 0.5rem;
  padding: 1rem 0 0.8rem;
  cursor: pointer;
  background-color: ${theme.colors.navy};
  color: white;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
  margin: auto;
`;

export const StyledTitle = styled.span`
  display: flex;
  margin: auto;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
