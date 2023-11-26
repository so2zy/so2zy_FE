import { Header } from '@components/common/Header';
// import { Footer } from '@components/common/Footer';
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

//숙소 조회 인터페이스
interface IAccommodations {
  id: number;
  accommodationName: string;
  latitude: number;
  longitude: number;
  addressCode: string;
  phoneNumber: string;
  accommodationImageList: ImageList[];
  roomInfoList: RoomList[];
}

interface ImageList {
  id: number;
  url: string;
}

interface RoomList {
  id: number;
  type: string;
  price: number;
  capacity: number;
  maxCapacity: number;
  checkIn: string;
  checkOut: string;
  stock: number;
  url: string;
}

export const PlaceDetail: React.FC = () => {
  const { id } = useParams();
  //조회
  const [accommodation, setAccommodation] = useState<IAccommodations>({
    id: 0,
    accommodationName: '',
    latitude: 0,
    longitude: 0,
    addressCode: '',
    phoneNumber: '',
    accommodationImageList: [{ id: 0, url: '' }],
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

  //예약
  const reservationData = {
    roomList: [
      {
        roomId: 0,
        startDate: '',
        endDate: '',
        price: 0,
      },
    ],
    personnel: 0,
    agreement: false,
    fromCart: false,
  };
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  //지도 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalLatitude, setModalLatitude] = useState<number>(0);
  const [modalLongitude, setModalLongitude] = useState<number>(0);

  const openModal = (latitude: number, longitude: number) => {
    console.log(latitude, longitude);
    setModalLatitude(latitude);
    setModalLongitude(longitude);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //숙소 정보 get하는 로직
  // `${process.env.REACT_APP_SERVER}/v1/accommodations/${id}`
  const getData = async (id: any) => {
    try {
      const res = await axios.get(`/accommodations/${id}`);

      console.log(`get test ${id}`);
      setAccommodation(res.data);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error('숙소 정보 가져오기 실패', error);
    }
  };

  useEffect(() => {
    console.log(`get test ${id}`);
    getData(id);
  }, [isLoading]);

  useEffect(() => {
    if (accommodation) {
      console.log(accommodation);
    }
  }, [accommodation]);

  //장바구니로 post하는 로직
  // `${process.env.REACT_APP_SERVER}/v1/carts/{member_id}/{room_id}
  const memberId = 'test'; //유저 정보 받아오기
  const roomId = 1; //클릭한 그 룸 아아디를 넘겨야함
  const addCart = async () => {
    try {
      const res = await axios.post(`/v1/carts/${memberId}/${roomId}`);
      console.log(res.data);
    } catch (error) {
      console.error('장바구니 실패', error);
    }
  };

  //예약으로 post하는 로직
  // `${process.env.REACT_APP_SERVER}/v1/reservations
  const makeReservation = async () => {
    try {
      const res = await axios.post('/v1/reservations', reservationData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error('예약 실패', error);
    }
  };

  if (isLoading) {
    //로딩 애니메이션 컴포넌트 추가하기
    return <div>Loading...</div>;
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
            <StyledButton>11.19~11.20 1박</StyledButton>
            <StyledButton>인원수 3명</StyledButton>
          </StyledSpan>
        </StyledBar>

        {/*숙소 이미지  */}
        <StyledImg src={accommodation.accommodationImageList[0].url} />

        <StyledMainTitle>
          {accommodation.accommodationName}
          <StyledStar
            className={isChecked ? 'checked' : 'unchecked'}
            onClick={() => {
              setIsChecked((prev) => !prev);
            }}
          />
        </StyledMainTitle>

        <StyledLocation
          onClick={() =>
            openModal(accommodation.latitude, accommodation.longitude)
          }
        >
          숙소 위치 보기
          <MdPlace />
        </StyledLocation>
        <MapModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          latitude={modalLatitude}
          longitude={modalLongitude}
        />

        <StyledDescription>{accommodation.addressCode}</StyledDescription>
        <StyledDescription> {accommodation.phoneNumber}</StyledDescription>
        <StyledLine />

        <StyledSubCategory>객실 선택</StyledSubCategory>
        {accommodation.roomInfoList &&
          accommodation.roomInfoList.map((room) => (
            <StyledSubContainer key={room.id}>
              <StyledDetailImg src={room.url} />
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
                <StyledRealPrice>{room.price}원</StyledRealPrice>
                <StyledSalePrice> {room.price}원</StyledSalePrice>
                {room.stock === 0 ? (
                  <StyledNoStock>예약불가</StyledNoStock>
                ) : (
                  <ReservationWrapper>
                    <StyledReservationButton>
                      <RiShoppingBagLine
                        onClick={() => {
                          addCart();
                          // navigate('/');   //장바구니로 이동
                        }}
                      />
                    </StyledReservationButton>
                    <StyledReservationButton
                      onClick={() => {
                        makeReservation();
                        // navigate('/');   //예약페이지로 이동
                      }}
                    >
                      예약하기
                    </StyledReservationButton>
                  </ReservationWrapper>
                )}
              </StyledDetail>
            </StyledSubContainer>
          ))}
      </>
    );
  }
};

export const StyledLine = styled.hr`
  color: ${theme.colors.gray3};
  margin: 1rem 0;
`;

const StyledSubContainer = styled.div`
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
    color: ${theme.colors.gray1};
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
  width: 45rem;
  height: 25rem;
  background-color: ${theme.colors.gray2};
  margin: 1rem auto;
  border-radius: 8px;
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
`;

const StyledTitle = styled.span`
  margin-left: 15rem;
  text-align: center;
  vertical-align: top;
  font-size: ${theme.fonts.subtitle4.fontSize};
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyledSpan = styled.span`
  margin-left: auto;
  margin-right: 0;
  vertical-align: top;
`;

const StyledButton = styled.button`
  margin-left: 1px;
  vertical-align: top;
  background-color: ${theme.colors.blue};
  color: white;
  border: none;
  border-radius: 6px;
  height: 1.75rem;
  padding: 0.25rem;
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
