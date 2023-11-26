import React, { useState } from 'react';
import styled from 'styled-components';
import {
  isCheckedCalendarState,
  isClickedCalendarState,
  startDateState,
  endDateState,
} from 'recoil/searchList';
import { useSetRecoilState } from 'recoil';
import { theme } from '@styles/theme';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { subDays } from 'date-fns';

export default function CalendarComponent({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const setGlobalStartDate = useSetRecoilState(startDateState);
  const setGlobalEndDate = useSetRecoilState(endDateState);
  const setIsCheckedCalendar = useSetRecoilState(isCheckedCalendarState);
  const setIsClickedCalendar = useSetRecoilState(isClickedCalendarState);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const handleFilter = () => {
    setGlobalStartDate(startDate);
    setGlobalEndDate(endDate);
    setIsCheckedCalendar(true);
    setIsClickedCalendar(false);
    closeModal();
  };

  const onChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  return (
    <StyledContainer>
      <StyledTitle>캘린더</StyledTitle>
      <DatePicker
        locale={ko} // 한국 날짜
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        minDate={subDays(new Date(), 0)} // 지난 날짜 선택 x
        onChange={onChange}
        isClearable={true}
        inline // 달력 표시
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
