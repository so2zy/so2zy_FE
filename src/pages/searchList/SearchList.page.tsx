import styled from 'styled-components';
import { theme } from '@styles/theme';
import { Item } from '@components/common/Item';
import { useEffect, useState } from 'react';
import { ReactComponent as SortUp } from '@assets/images/sort-up.svg';
import { ReactComponent as SortDown } from '@assets/images/sort-down.svg';

interface Hotel {
  id: number;
  name: string;
  // image: string;
  favorites: boolean;
  regularPrice: number;
  discountPrice: number;
}

export const SearchList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [sortBy, setSortBy] = useState('가격순');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortClick = (field: string) => {
    if (field === sortBy) {
      // 현재 정렬 필드를 클릭하면 정렬 순서를 변경
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // 다른 정렬 필드를 클릭하면 정렬 필드와 정렬 순서를 변경
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  useEffect(() => {
    fetch('/api/searchList')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotels(data);
      });
  }, []);

  return (
    <div>
      <StyledFilterSortWrapper>
        <StyledFilter>
          <StyledDateRange>날짜 범위</StyledDateRange>
          <StyledPeopleRange>인원수 범위</StyledPeopleRange>
          <StyledPriceRange>가격 범위</StyledPriceRange>
          <StyledReservation>예약가능여부</StyledReservation>
        </StyledFilter>
        <StyledSort>
          <StyledPrice onClick={() => handleSortClick('가격')}>
            <div style={{ marginRight: '.1rem' }}>가격</div>
            <StyledSortWrapper>
              <StyledSortUp viewBox="0 -250 320 512" />
              <StyledSortDown viewBox="0 250 320 512" />
            </StyledSortWrapper>
          </StyledPrice>
          <StyledSales onClick={() => handleSortClick('판매량')}>
            <div style={{ marginRight: '.1rem' }}>판매량</div>
            <StyledSortWrapper>
              <StyledSortUp viewBox="0 -250 320 512" />
              <StyledSortDown viewBox="0 250 320 512" />
            </StyledSortWrapper>
          </StyledSales>
        </StyledSort>
      </StyledFilterSortWrapper>
      <StyledContainer>
        {hotels.map((hotel) => {
          return (
            <Item
              key={hotel.id}
              name={hotel.name}
              // image={hotel.image}
              favorites={hotel.favorites}
              regularPrice={hotel.regularPrice}
              discountPrice={hotel.discountPrice}
            />
          );
        })}
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem auto;
  width: 50%;
  align-items: center;
  justify-items: center;
`;

const StyledFilterSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto 0;
  width: 48%;
  align-items: center;
  justify-items: center;
`;

const StyledFilter = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const StyledSort = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledDateRange = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledPeopleRange = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledPriceRange = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledReservation = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem 0;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledSales = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem 0;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${theme.colors.blue};
  color: white;
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
    fill: red;
  }
`;

const StyledSortUp = styled(SortUp)`
  width: 0.8125rem;
  height: 0.8125rem;
  fill: white;
  &.active {
    fill: red;
  }
`;
