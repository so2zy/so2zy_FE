import styled from 'styled-components';
import { theme } from '@styles/theme';
import { Item } from '@components/common/Item';
import { useEffect, useState } from 'react';
import { ReactComponent as SortUp } from '@assets/images/sort-up.svg';
import { ReactComponent as SortDown } from '@assets/images/sort-down.svg';
import { ReactComponent as Check } from '@assets/images/check.svg';
import { Modal } from '@components/Modal';
import { isCheckedPriceState } from 'recoil/searchList';

import { priceAState } from 'recoil/searchList';
import { priceBState } from 'recoil/searchList';
import { useRecoilValue } from 'recoil';

interface Hotel {
  id: number;
  name: string;
  // image: string;
  favorites: boolean;
  regularPrice: number;
  discountPrice: number;
  salesCount: number;
  isAvailable: boolean;
}

export const SearchList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [sortBy, setSortBy] = useState('가격순');
  const [sortOrder, setSortOrder] = useState('asc');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCheckedReservation, setIsCheckedReservation] = useState(false);
  const priceA = useRecoilValue(priceAState);
  const priceB = useRecoilValue(priceBState);
  const isCheckedPrice = useRecoilValue(isCheckedPriceState);

  const shortenPrice = (price: number) => {
    if (price === 0) {
      return '0';
    }
    return price
      .toLocaleString()
      .replace(/,|\.\d+/g, '')
      .slice(0, -4);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    fetchData();
  };

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

  const fetchData = () => {
    fetch('/api/searchList')
      .then((res) => res.json())
      .then((data: Hotel[]) => {
        const filteredData = data.filter((hotel) => {
          // 가격 필터링
          const isPriceInRange =
            hotel.discountPrice >= priceA && hotel.discountPrice <= priceB;
          // 예약가능 여부 필터링
          const isAvailable = isCheckedReservation ? hotel.isAvailable : true;

          return isPriceInRange && isAvailable;
        });

        const sortedData = filteredData.sort((a, b) => {
          if (sortBy === '가격') {
            const priceA =
              sortOrder === 'asc' ? a.discountPrice : b.discountPrice;
            const priceB =
              sortOrder === 'asc' ? b.discountPrice : a.discountPrice;
            return priceA - priceB;
          } else if (sortBy === '판매량') {
            const salesA = sortOrder === 'asc' ? a.salesCount : b.salesCount;
            const salesB = sortOrder === 'asc' ? b.salesCount : a.salesCount;
            return salesA - salesB;
          }
          return 0;
        });

        setHotels(sortedData);
      });
  };

  useEffect(() => {
    fetchData();
  }, [sortBy, sortOrder, priceA, priceB, isCheckedReservation]);

  return (
    <div>
      <StyledFilterSortWrapper>
        <StyledFilter>
          <StyledDateRange>날짜 범위</StyledDateRange>
          <StyledPeopleRange>인원수 범위</StyledPeopleRange>
          <StyledPriceRange onClick={openModal} $isChecked={isCheckedPrice}>
            {shortenPrice(priceA)}만원 ~ {shortenPrice(priceB)}만원
          </StyledPriceRange>
          <StyledReservationButton
            onClick={() => {
              setIsCheckedReservation(!isCheckedReservation);
            }}
          >
            <StyledCheck $isChecked={isCheckedReservation} />
            <StyledReservation $isChecked={isCheckedReservation}>
              예약가능
            </StyledReservation>
          </StyledReservationButton>
        </StyledFilter>
        <StyledSort>
          <StyledPriceButton
            onClick={() => handleSortClick('가격')}
            className={sortBy === '가격' ? 'active' : ''}
          >
            <StyledPrice>가격</StyledPrice>
            <StyledSortWrapper>
              <StyledSortUp
                viewBox="0 -250 320 512"
                className={
                  sortBy === '가격' && sortOrder === 'asc' ? 'active' : ''
                }
              />
              <StyledSortDown
                viewBox="0 250 320 512"
                className={
                  sortBy === '가격' && sortOrder === 'desc' ? 'active' : ''
                }
              />
            </StyledSortWrapper>
          </StyledPriceButton>
          <StyledSalesButton
            onClick={() => handleSortClick('판매량')}
            className={sortBy === '판매량' ? 'active' : ''}
          >
            <StyledSales>판매량</StyledSales>
            <StyledSortWrapper>
              <StyledSortUp
                viewBox="0 -250 320 512"
                className={
                  sortBy === '판매량' && sortOrder === 'asc' ? 'active' : ''
                }
              />
              <StyledSortDown
                viewBox="0 250 320 512"
                className={
                  sortBy === '판매량' && sortOrder === 'desc' ? 'active' : ''
                }
              />
            </StyledSortWrapper>
          </StyledSalesButton>
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
              // salesCount={hotel.salesCount}
            />
          );
        })}
      </StyledContainer>
      <Modal isOpen={modalIsOpen} closeModal={closeModal} />
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
  width: 47%;
  align-items: center;
  justify-items: center;

  /* position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1; */
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
const StyledPriceRange = styled.div<{ $isChecked: boolean }>`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0.25rem;
  background-color: ${theme.colors.blue};
  color: white;
  font-weight: ${(props) => (props.$isChecked ? 'bold' : 'normal')};
`;
const StyledReservationButton = styled.div`
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

const StyledPriceButton = styled.div`
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

const StyledSalesButton = styled.div`
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
