import { theme } from '@styles/theme';
import styled from 'styled-components';
import {
  RegionModalProps,
  RegionSelectProps,
  getRegionList,
} from './getPlaces';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { modalData } from './modalData';
import { VscChromeClose } from 'react-icons/vsc';
import { useRecoilState } from 'recoil';
import { regionModalOpen } from '@recoil/regionModal';
import { useNavigate } from 'react-router-dom';

const RegionModal = ({ isOpen }: RegionModalProps) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useRecoilState<boolean>(regionModalOpen);
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSelectedSigungu = (selectedSigungu: string) => {
    sessionStorage.setItem('selectedSigungu', selectedSigungu);
    navigate(`/regionList?sigunguname=${selectedSigungu}`);
  };

  return (
    <StyledWrapper style={{ display: isOpen ? 'block' : 'none' }}>
      <StyledContainer onClick={handleModalClick}>
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
        <StyledCloseBtn onClick={handleCloseModal} />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default RegionModal;

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
`;

const StyledContainer = styled.div`
  width: 40rem;
  height: 40rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  background-color: ${theme.colors.gray1};
  box-shadow: 4px 4px 4px ${theme.shadows.shadow3};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.navy};
  margin-top: 2rem;
`;

const StyledRegionContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 2rem;
  gap: 3.5rem;
`;

const StyledRegionList = styled.div`
  /* width: 90%; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border-radius: 0.825rem;
  background-color: ${theme.colors.gray1};
  margin: auto;
`;

const StyledRegionItem = styled.button`
  min-width: 6rem;
  font-size: 1.2rem;
  display: block;
  height: 5rem;
  /* line-height: 5rem; */
  background-color: transparent;
  border-radius: 0.625rem;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
  color: ${theme.colors.navy};
  font-weight: bold;
  cursor: pointer;
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

const StyledCloseBtn = styled(VscChromeClose)`
  font-size: 1.5rem;
  color: ${theme.colors.navy};
  position: absolute;
  top: 2.5rem;
  right: 1.6rem;
`;
