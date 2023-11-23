import { theme } from '@styles/theme';
import styled from 'styled-components';
import {
  RegionModalProps,
  RegionSelectProps,
  getRegionList,
} from './getPlaces';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const RegionModal = ({ isOpen }: RegionModalProps) => {
  const { data } = useQuery<RegionSelectProps[]>({
    queryKey: ['getRegionList'],
    queryFn: getRegionList,
    // refetchInterval: 1000,
  });
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedRegionList, setSelectedRegionList] = useState<string[]>([]);

  const handleRegionClick = (item: RegionSelectProps) => {
    // 클릭한 지역의 regions를 선택된 지역에 추가
    setSelectedRegionList(item.regions);
    setSelectedRegion(item.name);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <StyledWrapper style={{ display: isOpen ? 'block' : 'none' }}>
      <StyledContainer onClick={handleModalClick}>
        <StyledTitle>지역 선택</StyledTitle>
        <StyledRegionContainer>
          <StyledRegionList>
            {data &&
              data.map((item) => (
                <StyledRegionItem
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRegionClick(item);
                  }}
                  isSelected={item.name === selectedRegion}
                >
                  {item.name}
                </StyledRegionItem>
              ))}
          </StyledRegionList>
          <StyledLine />
          <StyledSelectedRegions>
            {selectedRegionList.map((selectedRegion, index) => (
              <StyledSelectedItem key={index}>
                {selectedRegion}
              </StyledSelectedItem>
            ))}
          </StyledSelectedRegions>
        </StyledRegionContainer>
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
  position: fixed;
  top: 20%;
  left: 33%;
  background-color: ${theme.colors.gray1};
  box-shadow: ${theme.shadows.shadow3};
  border-radius: 0.625rem;
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
  margin-left: 3rem;
  gap: 3.5rem;
`;

const StyledRegionList = styled.div``;

const StyledLine = styled.div`
  /* width: 1px; */
  height: 30rem;
  width: 0.01rem;
  background-color: ${theme.colors.gray2};
  padding: 0;
`;

const StyledSelectedRegions = styled.div`
  margin-right: 5rem;
`;

const StyledRegionItem = styled.button<{ isSelected: boolean }>`
  display: block;
  width: 10rem;
  height: 2rem;
  line-height: 2rem;
  background-color: transparent;
  border-radius: 0.625rem;
  margin-top: 0.5rem;
  color: ${theme.colors.navy};
  font-weight: bold;
  &:hover {
    opacity: 80%;
    box-shadow: ${theme.shadows.shadow3};
    transform: scale(1.1);
    color: ${theme.colors.yellow};
    /* border: 1px solid;
    border-color: ${theme.colors.yellow}; */
  }
  ${(props) =>
    props.isSelected &&
    `
    background-color: #f1fff9;
    box-shadow: ${theme.shadows.shadow3};
    border: 1px solid ${theme.colors.navy};
    transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    color: ${theme.colors.navy};
  `}
`;

const StyledSelectedItem = styled.button`
  display: block;
  width: 12rem;
  height: 2rem;
  margin-top: 0.5rem;
  line-height: 2rem;
  background-color: transparent;
  border-radius: 0.625rem;
  color: ${theme.colors.navy};
  font-weight: bold;
  &:hover {
    opacity: 80%;
    box-shadow: ${theme.shadows.shadow3};
    transform: scale(1.1);
    color: ${theme.colors.yellow};
  }
  &:active {
    background-color: #f1fff9;
    box-shadow: 1px 1px 35px rgba(198, 211, 255, 0.28);
    border: 1px solid ${theme.colors.navy};
    transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    color: ${theme.colors.navy};
  }
`;
// 지역에서 해당 시/군/동을 선택했을 때 다음 페이지로 가게 될 때 아래 버튼 스타일로 수정 예정입니다!
// const StyledSelectedItem = styled.button<{ isSelected: boolean }>`
//   display: block;
//   width: 12rem;
//   height: 2rem;
//   margin-top: 0.5rem;
//   line-height: 2rem;
//   background-color: transparent;
//   border-radius: 0.625rem;
//   color: ${theme.colors.navy};
//   font-weight: bold;
//   &:hover {
//     opacity: 80%;
//     box-shadow: ${theme.shadows.shadow3};
//     transform: scale(1.1);
//     color: ${theme.colors.yellow};
//   }
//   ${(props) =>
//     props.isSelected &&
//     `
//     background-color: #f1fff9;
//     box-shadow: 1px 1px 35px rgba(198, 211, 255, .28);
//     border: 1px solid ${theme.colors.navy};
//     transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
//     transform-style: preserve-3d;
//     color: ${theme.colors.navy};
//   `}
// `;
