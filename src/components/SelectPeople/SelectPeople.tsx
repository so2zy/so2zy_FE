import { isCheckedPeopleState } from 'recoil/searchList';
import { isClickedPeopleState } from 'recoil/searchList';
import { peopleCountState } from 'recoil/searchList';
import { useSetRecoilState, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { useState } from 'react';

export default function SelectPeople({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const setIsCheckedPeople = useSetRecoilState(isCheckedPeopleState);
  const setIsClickedPeople = useSetRecoilState(isClickedPeopleState);
  const [peopleCount, setPeopleCount] = useRecoilState(peopleCountState);
  const [count, setCount] = useState(peopleCount);

  const handleFilter = () => {
    setPeopleCount(count);
    setIsCheckedPeople(true);
    setIsClickedPeople(false);
    closeModal();
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
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
      <StyledButtonDiv onClick={handleFilter}>필터 적용하기</StyledButtonDiv>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  width: 250px;
  height: 10rem;
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

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.4rem;
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
`;

const StyledCountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5.5rem;
`;
const StyledCountNumber = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 0.5rem;
`;
const StyledCountButton = styled.button`
  border: 1px solid black;
  border-radius: 5rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0 0;
  background-color: ${theme.colors.blue};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
