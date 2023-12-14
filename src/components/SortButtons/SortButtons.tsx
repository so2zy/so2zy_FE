import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { ReactComponent as SortUp } from '@assets/images/sort-up.svg';
import { ReactComponent as SortDown } from '@assets/images/sort-down.svg';
import { ReactComponent as Map } from '@assets/images/map.svg';

interface SortButtonsProps {
  openModal: (type: string) => void;
  handleSortClick: any;
  sortBy: string;
  sortOrder: string;
  isRegionListPage: boolean;
}

const SortButtons: React.FC<SortButtonsProps> = ({
  openModal,
  handleSortClick,
  sortBy,
  sortOrder,
  isRegionListPage,
}) => {
  return (
    <StyledSort>
      <StyledPriceButton
        onClick={() => handleSortClick('price')}
        className={sortBy === 'price' ? 'active' : ''}
      >
        <StyledPrice>가격</StyledPrice>
        <StyledSortWrapper>
          <StyledSortUp
            viewBox="0 -250 320 512"
            className={
              sortBy === 'price' && sortOrder === 'asc' ? 'active' : ''
            }
          />
          <StyledSortDown
            viewBox="0 250 320 512"
            className={
              sortBy === 'price' && sortOrder === 'desc' ? 'active' : ''
            }
          />
        </StyledSortWrapper>
      </StyledPriceButton>
      <StyledSalesButton
        onClick={() => handleSortClick('soldCount')}
        className={sortBy === 'soldCount' ? 'active' : ''}
      >
        <StyledSales>판매량</StyledSales>
        <StyledSortWrapper>
          <StyledSortUp
            viewBox="0 -250 320 512"
            className={
              sortBy === 'soldCount' && sortOrder === 'asc' ? 'active' : ''
            }
          />
          <StyledSortDown
            viewBox="0 250 320 512"
            className={
              sortBy === 'soldCount' && sortOrder === 'desc' ? 'active' : ''
            }
          />
        </StyledSortWrapper>
      </StyledSalesButton>
      {isRegionListPage && (
        <StyledMapButton>
          <StyledMap
            onClick={() => {
              openModal('지도');
            }}
          />
        </StyledMapButton>
      )}
    </StyledSort>
  );
};
export default SortButtons;

const StyledSort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledPriceButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem 0;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${theme.colors.blue};
  color: white;
  &.active {
    font-weight: bold;
  }
`;
const StyledPrice = styled.div`
  margin-right: 0.1rem;
`;

const StyledSalesButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem 0;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${theme.colors.blue};
  color: white;
  &.active {
    font-weight: bold;
  }
`;

const StyledSales = styled.div`
  margin-right: 0.1rem;
`;

const StyledSortWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

const StyledSortDown = styled(SortDown)`
  width: 0.8125rem;
  height: 0.8125rem;
  fill: white;
  &.active {
    fill: ${theme.colors.navy};
  }
`;

const StyledSortUp = styled(SortUp)`
  width: 0.8125rem;
  height: 0.8125rem;
  fill: white;
  &.active {
    fill: ${theme.colors.navy};
  }
`;

const StyledMapButton = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMap = styled(Map)`
  height: 1.5rem;
  fill: ${theme.colors.navy};
  cursor: pointer;
`;
