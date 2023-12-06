import { Header } from '@components/common/Header';
import styled from 'styled-components';
import { GrLinkPrevious } from 'react-icons/gr';
import { theme } from '@styles/theme';
import { FaStar } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MapModal from './components/MapModal';
import { Loading } from '@components/common/Loading';
import { useLocation } from 'react-router-dom';
import { formatDate } from '@utils/useFormatDate';
import { NeedLogin } from '@components/common/NeedLogin';
import hotelDefaultImg from '@assets/images/hotelDefaultImg.png';
import hotelDefaultImg2 from '@assets/images/hotelDefaultImg2.png';
import CalendarModal from './components/CalendarModal';
import { useRecoilValue } from 'recoil';
import { startDateState, endDateState } from './../../recoil/searchList';

export interface IAccommodations {
  id: number;
  accommodationName: string;
  latitude: number;
  longitude: number;
  addressCode: string;
  phoneNumber: string;
  accommodationUrl: string;
  favorite: boolean;
  roomInfoList: RoomList[];
}

export interface RoomList {
  id: number;
  type: string;
  price: number;
  capacity: number;
  maxCapacity: number;
  checkIn: string;
  checkOut: string;
  url: string;
  stock: number;
}

export const PlaceDetail: React.FC = () => {
  const { id } = useParams();
  const accessToken = localStorage.getItem('accessToken');
  const [accommodation, setAccommodation] = useState<IAccommodations>({
    id: 0,
    accommodationName: '',
    latitude: 0,
    longitude: 0,
    addressCode: '',
    phoneNumber: '',
    accommodationUrl: '',
    favorite: false,
    roomInfoList: [
      {
        id: 0,
        type: '',
        price: 0,
        capacity: 0,
        maxCapacity: 0,
        checkIn: '',
        checkOut: '',
        stock: 0,
        url: '',
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  //지도 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalLatitude, setModalLatitude] = useState<number>(0);
  const [modalLongitude, setModalLongitude] = useState<number>(0);

  const openMapModal = (latitude: number, longitude: number) => {
    setModalLatitude(latitude);
    setModalLongitude(longitude);
    setModalIsOpen(true);
  };

  const closeMapModal = () => {
    setModalIsOpen(false);
  };

  //달력 모달
  const [calModalIsOpen, setCalModalIsOpen] = useState(false);

  const openCalModal = () => {
    setCalModalIsOpen(true);
  };

  const closeCalModal = () => {
    setCalModalIsOpen(false);
  };

  //필터링 데이터
  const location = useLocation();
  const { startDate, endDate, personnel } = location.state || {
    startDate: formatDate(new Date()),
    endDate: formatDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)),
    personnel: 1,
  }; //navigate로 페이지 넘어오는 데이터

  const [formatStartDate, setFormatStartDate] = useState('');
  const [formatEndDate, setFormatEndDate] = useState('');

  const calStartDate = useRecoilValue(startDateState); //달력 선택 데이터
  const calEndDate = useRecoilValue(endDateState);

  useEffect(() => {
    if (calStartDate && calEndDate) {
      setFormatStartDate(formatDate(calStartDate));
      setFormatEndDate(formatDate(calEndDate));
    } else {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      setFormatStartDate(formatDate(today));
      setFormatEndDate(formatDate(tomorrow));
    }
  }, [calStartDate, calEndDate]);

  const startResult: string = startDate.substr(5, 10);
  const endResult: string = endDate.substr(5, 10);

  const startCalResult = formatStartDate.substr(5, 10);
  const endCalResult = formatEndDate?.substr(5, 10);

  //숙소 정보 get
  const getData = async (id: any) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER}/v2/accommodations/${id}?startDate=${
          formatStartDate || startDate
        }&endDate=${formatEndDate || endDate}&personnel=${personnel}`,
        {
          headers: {
            'Access-Token': accessToken,
          },
        },
      );
      console.log(res);
      setAccommodation(res.data.data);
      setIsChecked(res.data.data.favorite);
      setIsLoading(false);
    } catch (error) {
      console.error('숙소 정보 가져오기 실패', error);
    }
  };

  useEffect(() => {
    getData(id);
    console.log('달력에서 선택된 값', formatStartDate);
    console.log('state로 넘어온 값', startDate);
  }, [formatStartDate, formatEndDate]);

  //찜
  const toggleFavorite = async (id: any) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER}/v1/accommodations/${id}/favorite`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Token': accessToken,
          },
        },
      );
    } catch (error) {
      console.error('즐겨찾기 실패:', error);
    }
  };

  //장바구니로 post
  const addCart = async (roomId: number) => {
    const confirm = window.confirm('장바구니에 추가하시겠습니까?');
    if (confirm) {
      try {
        await axios.post(
          `${process.env.REACT_APP_SERVER}/v2/carts/${roomId}`,
          {
            startDate: formatStartDate || startDate,
            endDate: formatEndDate || endDate,
            personnel,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Token': accessToken,
            },
          },
        );
        navigate('/cart');
      } catch (error) {
        console.error('장바구니 실패', error);
      }
    }
  };

  if (accessToken) {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <>
          <Header />
          <StyledBar>
            <StyledBefore
              onClick={() => {
                navigate('/'); //메인으로 이동
              }}
            />
            <StyledTitle>{accommodation.accommodationName}</StyledTitle>
            <StyledSpan>
              <StyledButton onClick={() => openCalModal()}>
                {startCalResult
                  ? `${startCalResult}-${endCalResult}`
                  : `${startResult}-${endResult}`}
              </StyledButton>
              <CalendarModal
                isOpen={calModalIsOpen}
                onRequestClose={closeCalModal}
              />

              <StyledButton>{personnel}명</StyledButton>
            </StyledSpan>
          </StyledBar>

          {accommodation.accommodationUrl ? (
            <StyledImg src={accommodation.accommodationUrl} />
          ) : (
            <StyledImg src={hotelDefaultImg} alt="사진이 없습니다." />
          )}

          <StyledMainTitle>
            {accommodation.accommodationName}
            <StyledStar
              className={isChecked ? 'checked' : 'unchecked'}
              onClick={async () => {
                try {
                  await toggleFavorite(id);
                  setIsChecked((prev) => !prev);
                } catch (error) {
                  console.error('즐겨찾기 실패:', error);
                }
              }}
            />
          </StyledMainTitle>

          <StyledLocation
            onClick={() =>
              openMapModal(accommodation.latitude, accommodation.longitude)
            }
          >
            숙소 위치 보기
            <MdPlace />
          </StyledLocation>
          <MapModal
            isOpen={modalIsOpen}
            onRequestClose={closeMapModal}
            latitude={modalLatitude}
            longitude={modalLongitude}
          />

          <StyledDescription>{accommodation.addressCode}</StyledDescription>
          <StyledDescription> {accommodation.phoneNumber}</StyledDescription>
          <StyledLine />

          <StyledSubCategory>객실 선택</StyledSubCategory>
          {accommodation.roomInfoList &&
          accommodation.roomInfoList.length > 0 ? (
            accommodation.roomInfoList.map((room) => (
              <StyledSubContainer key={room.id}>
                {room.url ? (
                  <StyledDetailImg src={room.url} />
                ) : (
                  <StyledDetailImg
                    src={hotelDefaultImg2}
                    alt="사진이 없습니다."
                  />
                )}
                <StyledDetail>
                  <StyledWrapper>
                    <StyledRoomTitle>{room.type}</StyledRoomTitle>
                  </StyledWrapper>
                  <StyledRoomType>숙박</StyledRoomType>
                  <StyledCapacity>
                    체크인 {room.checkIn}, 체크아웃
                    {room.checkOut}
                  </StyledCapacity>
                  <StyledCapacity>
                    ({room.capacity}명 기준/최대 {room.maxCapacity}명)
                  </StyledCapacity>
                  <StyledRealPrice>{room.price * 1.2}원</StyledRealPrice>
                  <StyledSalePrice> {room.price}원</StyledSalePrice>
                  {room.stock === 0 ? (
                    <StyledNoStock>예약불가</StyledNoStock>
                  ) : (
                    <ReservationWrapper>
                      <StyledReservationButton>
                        <RiShoppingBagLine
                          onClick={() => {
                            addCart(room.id);
                          }}
                        />
                      </StyledReservationButton>
                      <StyledReservationButton
                        onClick={() => {
                          navigate(`/reservation`, {
                            state: {
                              accommodation,
                              room,
                              startDate: formatStartDate || startDate,
                              endDate: formatEndDate || endDate,
                              personnel,
                            },
                          });
                        }}
                      >
                        예약하기
                      </StyledReservationButton>
                    </ReservationWrapper>
                  )}
                </StyledDetail>
              </StyledSubContainer>
            ))
          ) : (
            <StyledNotAvailable>
              해당 숙소에는 예약 가능한 객실이 없습니다.
            </StyledNotAvailable>
          )}
        </>
      );
    }
  } else {
    return <NeedLogin />;
  }
};

const StyledNotAvailable = styled.div`
  color: ${theme.colors.gray3};
  font-size: ${theme.fonts.subtitle5.fontSize};
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  margin: 1rem 0 0;
`;

export const StyledLine = styled.hr`
  color: ${theme.colors.gray3};
  margin: 1rem 0;
`;

const StyledSubContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  height: 13.5rem;
  border-radius: 8px;
  display: flex;
`;

// 이미지 밑 이름
const StyledMainTitle = styled.div`
  font-size: ${theme.fonts.subtitle3.fontSize};
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  display: flex;
  align-items: center;
  vertical-align: top;
`;

const StyledStar = styled(FaStar)`
  margin-left: auto;
  vertical-align: top;
  font-size: ${theme.fonts.subtitle4.fontSize};
  color: ${theme.colors.yellow};
  cursor: pointer;

  &.checked {
    color: ${theme.colors.yellow};
  }
  &.unchecked {
    color: ${theme.colors.gray2};
  }
`;

// 위치보기부분
const StyledLocation = styled.div`
  width: 100%;
  text-align: start;
  color: ${theme.colors.navy};
  font-size: ${theme.fonts.subtitle5.fontSize};
  font-weight: ${theme.fonts.subtitle3.fontWeight};
  display: block;
  cursor: pointer;

  &:hover {
    border: none;
    color: ${theme.colors.gray2};
  }
`;

const StyledSubCategory = styled.div`
  width: 100%;
  text-align: start;
  color: ${theme.colors.navy};
  font-size: ${theme.fonts.subtitle5.fontSize};
  font-weight: ${theme.fonts.subtitle3.fontWeight};
  display: block;
`;

const StyledDescription = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  text-align: start;
  display: block;
  color: gray;
  font-size: ${theme.fonts.body.fontSize};
  font-weight: ${theme.fonts.body.fontWeight};
`;

//호텔 이미지
const StyledImg = styled.img`
  height: 28rem;
  background-color: ${theme.colors.gray2};
  border-radius: 8px;
  width: 100%;
  margin: 1rem 0;
`;

//객실 이미지
const StyledDetailImg = styled.img`
  padding: 0;
  width: 45%;
  height: 100%;
  background-color: ${theme.colors.gray2};
  border-radius: 8px 0 0 8px;
  display: inline-block;
  box-shadow: 2px 2px 2px ${theme.colors.gray2};
`;

const StyledDetail = styled.div`
  padding: 1rem 0 0 1rem;
  width: 55%;

  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px ${theme.colors.gray2};
`;

const StyledWrapper = styled.div`
  font-size: ${theme.fonts.subtitle5.fontSize};
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  display: flex;
  align-items: center;
  vertical-align: top;
`;

const StyledRoomTitle = styled.div`
  padding: 0 0 2rem 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
`;

const StyledRoomType = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.navy};
  font-weight: ${theme.fonts.subtitle1.fontWeight};
`;

const StyledCapacity = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.fonts.body.fontSize};
`;

const StyledRealPrice = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: line-through;
`;

const StyledSalePrice = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

const StyledBefore = styled(GrLinkPrevious)`
  vertical-align: top;
  cursor: pointer;
  font-size: ${theme.fonts.subtitle4.fontSize};
`;

const StyledTitle = styled.span`
  flex-grow: 1;
  text-align: center;
  vertical-align: top;
  font-size: ${theme.fonts.subtitle4.fontSize};
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyledSpan = styled.span`
  margin-left: auto;
  vertical-align: top;
`;

const StyledButton = styled.button`
  margin-left: 0.5rem;
  vertical-align: top;
  background-color: ${theme.colors.blue};
  color: white;
  border: none;
  border-radius: 6px;
  // height: 2.5rem;
  padding: 0.25rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
`;

const ReservationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledReservationButton = styled.button`
  background-color: ${theme.colors.navy};
  color: white;
  border: none;
  border-radius: 6px;
  height: 1.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 0.25rem;
  padding: 0.25rem;

  &:hover {
    border: none;
    background-color: ${theme.colors.gray2};
  }
`;

const StyledNoStock = styled.div`
  color: red;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  margin-right: 0.75rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;
