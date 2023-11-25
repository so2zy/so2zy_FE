import styled from 'styled-components';
import { theme } from '@styles/theme';
import { Item } from '@components/common/Item';
import { useEffect, useState } from 'react';
import { ReactComponent as SortUp } from '@assets/images/sort-up.svg';
import { ReactComponent as SortDown } from '@assets/images/sort-down.svg';
import { ReactComponent as Check } from '@assets/images/check.svg';
import { Modal } from '@components/Modal';
import {
  isCheckedPriceState,
  isCheckedPeopleState,
  isCheckedCalendarState,
  isClickedPriceState,
  isClickedPeopleState,
  isClickedCalendarState,
  peopleCountState,
  priceAState,
  priceBState,
  startDateState,
  endDateState,
  searchInputState,
} from 'recoil/searchList';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { getFilterAndSortData } from './getData';

interface Hotel {
  id: number;
  name: string;
  // image: string;
  favorites: boolean;
  regularPrice: number;
  discountPrice: number;
  salesCount: number;
  isAvailable: boolean;
  peopleCount: number;
}

export const SearchListReal: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isClickedReservation, setIsClickedReservation] = useState(false); // 필터링 예약버튼 클릭 여부
  const setIsClickedPrice = useSetRecoilState(isClickedPriceState); // 필터링 가격버튼 클릭 여부
  const setIsClickedPeople = useSetRecoilState(isClickedPeopleState); // 필터링 인원수버튼 클릭 여부
  const setIsClickedCalendar = useSetRecoilState(isClickedCalendarState); // 필터링 날짜 클릭 여부
  const isCheckedPrice = useRecoilValue(isCheckedPriceState); // 가격 필터링 여부
  const isCheckedPeople = useRecoilValue(isCheckedPeopleState); // 인원수 필터링 클릭여부
  const isCheckedCalendar = useRecoilValue(isCheckedCalendarState); // 날짜 필터링 클릭여부
  const priceA = useRecoilValue(priceAState); // 최소 가격
  const priceB = useRecoilValue(priceBState); // 최대 가격
  const peopleCount = useRecoilValue(peopleCountState); // 인원수
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('검색결과');
  const searchedName = useRecoilValue(searchInputState); // 검색한 이름
  const page = 0;
  const size = 10;
  const likeCount = undefined;

  const shortenPrice = (price: number) => {
    if (price === 0) {
      return '0';
    }
    return price
      .toLocaleString()
      .replace(/,|\.\d+/g, '')
      .slice(0, -4);
  };

  const openModal = (type: string) => {
    if (type == 'price') {
      setIsClickedPrice(true);
    } else if (type == '인원수') {
      setIsClickedPeople(true);
    } else if (type == '날짜') {
      setIsClickedCalendar(true);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsClickedPrice(false);
    setIsClickedPeople(false);
    setIsClickedCalendar(false);
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

  useEffect(() => {
    refetch();
  }, [{ sortBy, sortOrder }]); // 둘 중 하나라도 변하고 실행되면 안되고, 둘 다 변하고 실행돼야함

  const { data: filterAndSortData, refetch } = useQuery({
    queryKey: ['filterAndSortData'],
    queryFn: () =>
      getFilterAndSortData(
        searchedName,
        page,
        size,
        likeCount,
        priceA,
        priceB,
        sortOrder,
        sortBy,
      ),
    enabled: false,
  });
  console.log('filterAndSortData', filterAndSortData);

  const fetchData = () => {
    fetch('/api/searchList')
      .then((res) => res.json())
      .then((data: Hotel[]) => {
        const filteredData = data.filter((hotel) => {
          // 인원수 필터링
          const isPeopleInRange = hotel.peopleCount >= peopleCount;
          // 가격 필터링
          const isPriceInRange =
            hotel.discountPrice >= priceA && hotel.discountPrice <= priceB;
          // 예약가능 여부 필터링
          const isAvailable = isClickedReservation ? hotel.isAvailable : true;

          return isPeopleInRange && isPriceInRange && isAvailable;
        });

        const sortedData = filteredData.sort((a, b) => {
          if (sortBy === 'price') {
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
  }, [sortBy, sortOrder, priceA, priceB, isClickedReservation, peopleCount]);

  useEffect(() => {
    // const timeDiff = endDate?.getTime() - startDate?.getTime();
    if (!startDate && !endDate) {
      const today = new Date();
      const todayMonth = (today?.getMonth() + 1).toString();
      const todayDate = today?.getDate();
      setDate(`${todayMonth}.${todayDate}`);
      return;
    }
    if (startDate && !endDate) {
      const startMonth = (startDate?.getMonth() + 1).toString();
      const startDay = startDate?.getDate();
      setDate(`${startMonth}.${startDay}`);
      return;
    }
    if (startDate && endDate) {
      const differDate = Math.floor(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
      );
      const startMonth = (startDate?.getMonth() + 1).toString();
      const startDay = startDate?.getDate();
      const endMonth = (endDate?.getMonth() + 1).toString();
      const endDay = endDate?.getDate();
      setDate(
        `${startMonth}.${startDay} ~ ${endMonth}.${endDay}, ${differDate}박`,
      );
    }
  }, [startDate, endDate]);

  return (
    <div>
      <StyledFilterSortWrapper>
        <StyledFilter>
          <StyledDateRangeButton
            onClick={() => {
              openModal('날짜');
            }}
            $isChecked={isCheckedCalendar}
          >
            {date}
          </StyledDateRangeButton>
          <StyledPeopleRangeButton
            onClick={() => {
              openModal('인원수');
            }}
            $isChecked={isCheckedPeople}
          >
            인원수 {peopleCount}명
          </StyledPeopleRangeButton>
          <StyledPriceRangeButton
            onClick={() => {
              openModal('가격');
            }}
            $isChecked={isCheckedPrice}
          >
            {shortenPrice(priceA)}만원 ~ {shortenPrice(priceB)}만원
          </StyledPriceRangeButton>
          <StyledReservationButton
            onClick={() => {
              setIsClickedReservation(!isClickedReservation);
            }}
          >
            <StyledCheck $isChecked={isClickedReservation} />
            <StyledReservation $isChecked={isClickedReservation}>
              예약가능
            </StyledReservation>
          </StyledReservationButton>
        </StyledFilter>
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
            onClick={() => handleSortClick('likeCount')}
            className={sortBy === 'likeCount' ? 'active' : ''}
          >
            <StyledSales>좋아요</StyledSales>
            <StyledSortWrapper>
              <StyledSortUp
                viewBox="0 -250 320 512"
                className={
                  sortBy === 'likeCount' && sortOrder === 'asc' ? 'active' : ''
                }
              />
              <StyledSortDown
                viewBox="0 250 320 512"
                className={
                  sortBy === 'likeCount' && sortOrder === 'desc' ? 'active' : ''
                }
              />
            </StyledSortWrapper>
          </StyledSalesButton>
        </StyledSort>
      </StyledFilterSortWrapper>

      {/* {filterNameData && (
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
      )} */}

      {/* {searchData && (
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
      )} */}

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