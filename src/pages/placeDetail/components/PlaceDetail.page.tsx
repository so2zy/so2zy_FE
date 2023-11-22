import { Header } from '@components/common/Header';
import { Footer } from '@components/common/Footer';
import styled from 'styled-components';
import { GrLinkPrevious } from 'react-icons/gr';
import { theme } from '@styles/theme';
import { FaStar } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import axios from 'axios';

//숙소 정보, 여기선 Place[1].name등이 사용 예정
// interface Place {
//   id: number;
//   name: string;
//   place: number;
//   placePicture: string;
// }

//객실 정보
interface Room {
  id: number;
  name: string;
  checkIn: string; //date객체로 굳이 받을 필요 없는지?
  checkOut: string;
  originalPrice: string;
  salePrice: string;
  roomPicture: string;
  // number: number; //방 수량
}

export const PlaceDetail: React.FC = () => {
  const [placeName, setPlaceName] = useState();
  const [placeLoc, setPlaceLoc] = useState();
  const [placePic, setPlacePic] = useState();
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/roomId');
        setRooms(res.data);
        const res2 = await axios.get('/api/placeId');
        setPlaceName(res2.data[0].name); //롯데호텔 데이터 출력
        setPlaceLoc(res2.data[0].place);
        setPlacePic(res2.data[0].picture);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <StyledBar>
        <StyledBefore />
        <StyledTitle>{placeName}</StyledTitle>
        <StyledSpan>
          <StyledButton>11.19~11.20 1박</StyledButton>
          <StyledButton>인원수 3명</StyledButton>
        </StyledSpan>
      </StyledBar>

      <StyledImg src={placePic} />

      <StyledMainTitle>
        {placeName}
        <StyledStar
        // className={isChecked ? 'checked' : 'unchecked'}
        // onClick={() => {
        //   setIsChecked((prev) => !prev);
        //   setStarBtnClicked(!starBtnClicked);
        // }}
        />
      </StyledMainTitle>

      <StyledLocation>
        {/* map api */}
        숙소 위치 보기
        <MdPlace />
      </StyledLocation>
      <StyledDescription>{placeLoc}</StyledDescription>
      <StyledLine />

      <StyledSubCategory>객실 선택</StyledSubCategory>
      {rooms.map((room) => (
        <StyledSubContainer key={room.id}>
          <StyledDetailImg src={room.roomPicture} />
          <StyledDetail>
            <StyledWrapper>
              <StyledRoomTitle>
                {room.name} <StyledBag />
              </StyledRoomTitle>
            </StyledWrapper>
            <StyledRoomType>숙박</StyledRoomType>
            <StyledRoomTime>
              체크인 {room.checkIn} ~ 체크아웃 {room.checkOut}
            </StyledRoomTime>
            <StyledRealPrice> {room.originalPrice}</StyledRealPrice>
            <StyledSalePrice>{room.salePrice}</StyledSalePrice>
            <StyledReservationButton>예약하기</StyledReservationButton>
          </StyledDetail>
        </StyledSubContainer>
      ))}

      <Footer />
    </>
  );
};

const StyledLine = styled.hr`
  color: ${theme.colors.gray3};
  margin: 1rem 0;
`;

const StyledSubContainer = styled.div`
  margin: 1rem 0;
  height: 13rem;
  // border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  // box-shadow: 1px 1px 1px ${theme.colors.gray2};
  display: flex;
`;

// 이미지 밑 이름
const StyledMainTitle = styled.div`
  display: inline-block;
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

  // &.checked {
  //   color: ${theme.colors.yellow};
  // }
  // &.unchecked {
  //   color: ${theme.colors.gray1};
  // }
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
  padding: 0
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
  height: 100%;
  background-color: ${theme.colors.gray3};
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
`;

const StyledBag = styled(RiShoppingBagLine)`
  font-size: ${theme.fonts.subtitle4.fontSize};
  color: ${theme.colors.navy};
  cursor: pointer;
`;

const StyledRoomType = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRoomTime = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 0 1rem;
`;

const StyledBefore = styled(GrLinkPrevious)`
  vertical-align: top;
  cursor: pointer;
`;

const StyledTitle = styled.span`
  margin-left: 17rem;
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
  padding-right: 0.25rem;
  cursor: pointer;
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
  margin-left: auto;
  margin-right: 0.75rem;
  padding: 0.25rem;

  &:hover {
    border: none;
    background-color: ${theme.colors.gray2};
  }
`;
