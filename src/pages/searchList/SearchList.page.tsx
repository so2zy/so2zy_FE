import styled from 'styled-components';
// import { GrLinkPrevious } from 'react-icons/gr';
import { theme } from '@styles/theme';
// import { FaStar } from 'react-icons/fa';
// import { MdPlace } from 'react-icons/md';
import { Item } from '@components/common/Item';
import { useEffect, useState } from 'react';

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
          <StyledPrice>가격</StyledPrice>
          <StyledSales>판매량</StyledSales>
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
  /* border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 10px 0px ${theme.colors.gray2}; */
`;

const StyledFilterSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
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
  gap: 0.5rem;
`;

const StyledDateRange = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledPeopleRange = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledPriceRange = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledReservation = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledPrice = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
const StyledSales = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${theme.colors.blue};
  color: white;
`;
