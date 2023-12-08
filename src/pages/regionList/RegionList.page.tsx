import styled from 'styled-components';
import { theme } from '@styles/theme';
import { Item } from '@components/common/Item';
import { useEffect, useState } from 'react';
import { ReactComponent as SortUp } from '@assets/images/sort-up.svg';
import { ReactComponent as SortDown } from '@assets/images/sort-down.svg';
import { ReactComponent as Check } from '@assets/images/check.svg';
import { ReactComponent as Map } from '@assets/images/map.svg';
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
  startStringState,
  endStringState,
  isClickedMapState,
} from 'recoil/searchList';
import { regionListState, updateRegionListState } from '@recoil/regionList';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getRegionListData } from '@utils/getData';
import InfiniteScroll from 'react-infinite-scroller';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@utils/useFormatDate';

export const RegionList: React.FC = () => {
  const areaName = '서울특별시';
  const selectedSigungu = sessionStorage.getItem('selectedSigungu');
  const [regionList, setRegionList] = useRecoilState(regionListState);
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isClickedReservation, setIsClickedReservation] = useState(false); // 필터링 예약버튼 클릭 여부
  const setIsClickedPrice = useSetRecoilState(isClickedPriceState); // 필터링 가격버튼 클릭 여부
  const setIsClickedPeople = useSetRecoilState(isClickedPeopleState); // 필터링 인원수버튼 클릭 여부
  const setIsClickedCalendar = useSetRecoilState(isClickedCalendarState); // 필터링 날짜 클릭 여부
  const setIsClickedMapState = useSetRecoilState(isClickedMapState);
  const isCheckedPrice = useRecoilValue(isCheckedPriceState); // 가격 필터링 여부
  const isCheckedPeople = useRecoilValue(isCheckedPeopleState); // 인원수 필터링 클릭여부
  const isCheckedCalendar = useRecoilValue(isCheckedCalendarState); // 날짜 필터링 클릭여부
  const priceA = useRecoilValue(priceAState); // 최소 가격
  const priceB = useRecoilValue(priceBState); // 최대 가격
  const peopleCount = useRecoilValue(peopleCountState); // 인원수
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const startString = useRecoilValue(startStringState);
  const endString = useRecoilValue(endStringState);
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const [formatStartDate, setFormatStartDate] = useState('');
  const [formatEndDate, setFormatEndDate] = useState('');

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
    if (type == '가격') {
      setIsClickedPrice(true);
    } else if (type == '인원수') {
      setIsClickedPeople(true);
    } else if (type == '날짜') {
      setIsClickedCalendar(true);
    } else if (type == '지도') {
      setIsClickedMapState(true);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsClickedPrice(false);
    setIsClickedPeople(false);
    setIsClickedCalendar(false);
    setIsClickedMapState(false);
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

  const {
    data: regionListData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [
      'regionListData',
      areaName,
      selectedSigungu,
      peopleCount,
      startString,
      endString,
      priceA,
      priceB,
      sortOrder,
      sortBy,
    ],
    queryFn: ({ pageParam }) =>
      getRegionListData(
        areaName,
        selectedSigungu,
        peopleCount,
        startString,
        endString,
        priceA,
        priceB,
        sortOrder,
        sortBy,
        pageParam,
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastData = lastPage?.data?.body;
      return lastData && lastData.length === 10 ? lastPageParam + 1 : undefined;
    },
  });

  useEffect(() => {
    if (!startDate && !endDate) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const todayMonth = (today?.getMonth() + 1).toString();
      const todayDate = today?.getDate();
      const tomorrowMonth = (tomorrow.getMonth() + 1).toString();
      const tomorrowDate = tomorrow.getDate();

      setDate(
        `${todayMonth}.${todayDate} ~ ${tomorrowMonth}.${tomorrowDate}, 1박`,
      );
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

  const handleItemClick = (id: number) => {
    navigate(`/place/${id}`, {
      state: {
        startDate: formatStartDate,
        endDate: formatEndDate,
        personnel: peopleCount,
      },
    });
  };

  useEffect(() => {
    const newPagesData = regionListData?.pages
      ?.map((page) => page.data?.body)
      .flat();

    if (newPagesData) {
      setRegionList((prevRegionList) => [...prevRegionList, ...newPagesData]);
    }
  }, [regionListData]);

  useEffect(() => {
    if (startDate && endDate) {
      setFormatStartDate(formatDate(startDate));
      setFormatEndDate(formatDate(endDate));
    } else {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      setFormatStartDate(formatDate(today));
      setFormatEndDate(formatDate(tomorrow));
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
          <StyledMapButton>
            <StyledMap
              onClick={() => {
                openModal('지도');
              }}
            />
          </StyledMapButton>
        </StyledSort>
      </StyledFilterSortWrapper>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={() => fetchNextPage()}
        initialLoad={false}
      >
        {regionListData?.pages?.map((page, pageIndex) => (
          <StyledContainer key={pageIndex}>
            {page?.data?.body?.map((hotel: any, index: number) => (
              <Item
                onClick={() => handleItemClick(hotel.id)}
                key={hotel.id}
                name={hotel.name}
                image={hotel.accommodationImageUrl}
                likeCount={hotel.likeCount}
                price={hotel.price}
              />
            ))}
          </StyledContainer>
        ))}
      </InfiniteScroll>

      <Modal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem auto;
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

const StyledMapButton = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMap = styled(Map)`
  height: 1.5rem;
  fill: ${theme.colors.navy};
  cursor: pointer;
`;
