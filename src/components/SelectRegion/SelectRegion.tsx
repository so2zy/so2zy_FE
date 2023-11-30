import { regionListState } from '@recoil/regionList';
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
  const setRegionList = useSetRecoilState(regionListState);

  const handleSelectedSigungu = (selectedSigungu: string) => {
    sessionStorage.setItem('selectedSigungu', selectedSigungu);
    const selectedSigunguHistory = JSON.parse(
      sessionStorage.getItem('selectedSigunguHistory') || '[]',
    ) as string[];

    if (!selectedSigunguHistory.includes(selectedSigungu)) {
      selectedSigunguHistory.push(selectedSigungu);
    }

    sessionStorage.setItem(
      'selectedSigunguHistory',
      JSON.stringify(selectedSigunguHistory),
    );
    setRegionList([]); // 지역 바뀌면 초기화
    navigate(`/regionList?sigunguname=${selectedSigungu}`);
    closeModal();
  };
  return (
    <StyledContainer>
      <StyledTitle>지역 선택</StyledTitle>

      <StyledRegionContainer>
        <StyledRegionList>
          {modalData?.map((sigungu) => (
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
  margin: auto;
`;

const StyledRegionItem = styled.button`
  font-size: 1rem;
  display: block;
  height: 3rem;
  line-height: 3rem;
  background-color: transparent;
  border-radius: 0.625rem;
  margin: 0.5rem 0.5rem 1rem;
  padding-top: 0.225rem;
  color: ${theme.colors.navy};
  font-weight: bold;
  &:hover {
    background-color: #7be8b2;
    box-shadow: 1px 1px 35px rgba(198, 211, 255, 0.28);
    transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    color: ${theme.colors.navy};
    cursor: pointer;
  }
`;
