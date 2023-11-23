import React, { useState } from 'react';
import styled from 'styled-components';
import {
  isCheckedCalendarState,
  isClickedCalendarState,
} from 'recoil/searchList';
import { useSetRecoilState } from 'recoil';
import { theme } from '@styles/theme';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CalendarComponent({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const setIsCheckedCalendar = useSetRecoilState(isCheckedCalendarState);
  const setIsClickedCalendar = useSetRecoilState(isClickedCalendarState);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleFilter = () => {
    setIsCheckedCalendar(true);
    setIsClickedCalendar(false);
    closeModal();
  };

  return (
    <StyledContainer>
      <StyledTitle>캘린더</StyledTitle>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
        inline
      />
      <StyledButtonDiv onClick={handleFilter}>필터 적용하기</StyledButtonDiv>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 0.2fr auto;
  width: 250px;
`;
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.4rem;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem 0 0.8rem;
  cursor: pointer;
  background-color: ${theme.colors.navy};
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
`;
