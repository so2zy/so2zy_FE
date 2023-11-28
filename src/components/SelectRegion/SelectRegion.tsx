import { isCheckedPeopleState } from 'recoil/searchList';
import { isClickedPeopleState } from 'recoil/searchList';
import { peopleCountState } from 'recoil/searchList';
import { useSetRecoilState, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { modalData } from '@pages/main/components/modalData';

export default function SelectRegion({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const navigate = useNavigate();

  const handleSelectedSigungu = (selectedSigungu: string) => {
    sessionStorage.setItem('selectedSigungu', selectedSigungu);
    navigate(`/regionList?sigunguname=${selectedSigungu}`);
    closeModal();
  };
  return (
    <StyledContainer>
      <StyledTitle>지역 선택</StyledTitle>

      <StyledRegionContainer>
        <StyledRegionList>
          {modalData.map((sigungu) => (
            <StyledRegionItem
              key={sigungu.id}
              onClick={() => {
                handleSelectedSigungu(sigungu.selectedSigungu);
              }}
            >
              {sigungu.selectedSigungu}
            </StyledRegionItem>
          ))}
        </StyledRegionList>
      </StyledRegionContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* width: 250px;
  height: 10rem; */
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.4rem;
`;

const StyledRegionContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 2rem;
`;

const StyledRegionList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border-radius: 0.825rem;
  background-color: ${theme.colors.gray1};
  margin: auto;
`;

const StyledRegionItem = styled.button`
  font-size: 1.2rem;
  display: block;
  height: 3rem;
  line-height: 3rem;
  background-color: transparent;
  border-radius: 0.625rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.navy};
  font-weight: bold;
  &:hover {
    background-color: #f1fff9;
    box-shadow: 1px 1px 35px rgba(198, 211, 255, 0.28);
    border: 1px solid ${theme.colors.navy};
    transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    color: ${theme.colors.navy};
  }
`;
