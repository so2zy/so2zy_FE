import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { shortenPrice } from '@utils/shortenPrice';
import { ReactComponent as Check } from '@assets/images/check.svg';

interface FilterButtonsProps {
  openModal: (type: string) => void;
  isCheckedCalendar: boolean;
  isCheckedPeople: boolean;
  isCheckedPrice: boolean;
  setIsClickedReservation: (value: boolean) => void;
  date: string;
  peopleCount: number;
  priceA: number;
  priceB: number;
  isClickedReservation: boolean;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  openModal,
  isCheckedCalendar,
  isCheckedPeople,
  isCheckedPrice,
  setIsClickedReservation,
  date,
  peopleCount,
  priceA,
  priceB,
  isClickedReservation,
}) => {
  return (
    <StyledFilter>
      <StyledDateRangeButton
        onClick={() => openModal('날짜')}
        $isChecked={isCheckedCalendar}
      >
        {date}
      </StyledDateRangeButton>
      <StyledPeopleRangeButton
        onClick={() => openModal('인원수')}
        $isChecked={isCheckedPeople}
      >
        인원수 {peopleCount}명
      </StyledPeopleRangeButton>
      <StyledPriceRangeButton
        onClick={() => openModal('가격')}
        $isChecked={isCheckedPrice}
      >
        {shortenPrice(priceA)}만원 ~ {shortenPrice(priceB)}만원
      </StyledPriceRangeButton>
      <StyledReservationButton
        onClick={() => setIsClickedReservation(!isClickedReservation)}
      >
        <StyledCheck $isChecked={isClickedReservation} />
        <StyledReservation $isChecked={isClickedReservation}>
          예약가능
        </StyledReservation>
      </StyledReservationButton>
    </StyledFilter>
  );
};
export default FilterButtons;

const StyledFilter = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledDateRangeButton = styled.button<{ $isChecked: boolean }>`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
  font-weight: ${(props) => (props.$isChecked ? 'bold' : 'normal')};
`;
const StyledPeopleRangeButton = styled.button<{ $isChecked: boolean }>`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
  font-weight: ${(props) => (props.$isChecked ? 'bold' : 'normal')};
`;

const StyledPriceRangeButton = styled.button<{ $isChecked: boolean }>`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
  font-weight: ${(props) => (props.$isChecked ? 'bold' : 'normal')};
`;
const StyledReservationButton = styled.button`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem 0.25rem;

  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledReservation = styled.div<{ $isChecked: boolean }>`
  font-weight: ${(props) => (props.$isChecked ? 'bold' : 'normal')};
`;

const StyledCheck = styled(Check)<{ $isChecked: boolean }>`
  display: ${(props) => (props.$isChecked ? 'block' : 'none')};
  fill: ${(props) =>
    props.$isChecked ? props.theme.colors.navy : 'transparent'};
  margin-right: 0.2rem;
  width: 1rem;
  height: 1rem;
`;
