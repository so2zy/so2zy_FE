import { theme } from '@styles/theme';
import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import {
  StyledItemDesc,
  StyledItemTitle,
  StyledBtnText,
  StyledButtonWrapper,
} from 'pages/reservation/Reservation.page';
import { useQuery } from '@tanstack/react-query';
import { getCarts } from './components/getCart';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export interface CartItemProps {
  data: {
    accommodationList: AccommodationList[];
  };
}

export interface AccommodationList {
  accommodationId: number;
  accommodationName: string;
  address: string;
  roomList: CartRoomList[];
}

export interface CartRoomList {
  roomId: number;
  type: string;
  checkIn: string;
  checkOut: string;
  capacity: number;
  maxCapacity: number;
  price: number;
  startDate: string;
  endDate: string;
  roomImageUrl: string;
  personnel: number;
}
export const Cart: React.FC = () => {
  const { data } = useQuery<CartItemProps>({
    queryKey: ['mycarts'],
    queryFn: getCarts,
  });

  const [checkedHotel, setCheckedHotel] = useState<AccommodationList[]>([]);
  const [checkedAllHotel, setCheckedAllHotel] = useState(false);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [salePrice, setSalePrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const navigate = useNavigate();
  const handleCheckBoxChange = (accommodation: AccommodationList) => {
    if (
      checkedHotel.some(
        (a) => a.accommodationId === accommodation.accommodationId,
      )
    ) {
      setCheckedHotel((prev) =>
        prev.filter((a) => a.accommodationId !== accommodation.accommodationId),
      );
    } else {
      setCheckedHotel((prev) => [...prev, accommodation]);
    }
  };

  const handleAllCheckBoxChange = () => {
    if (checkedAllHotel) {
      setCheckedHotel([]);
    } else {
      if (data && data.data) {
        setCheckedHotel(data.data.accommodationList);
      }
    }
    setCheckedAllHotel(!checkedAllHotel);
  };

  const handleReservation = () => {
    navigate(`/cartreservation`, { state: { checkedHotel } });
  };

  useEffect(() => {
    const sum = checkedHotel.reduce((acc, accommodation) => {
      return (
        acc +
        accommodation.roomList.reduce((roomAcc, room) => {
          return roomAcc + room.price * 1.2;
        }, 0)
      );
    }, 0);
    const sale = checkedHotel.reduce((acc, accommodation) => {
      return (
        acc +
        accommodation.roomList.reduce((roomAcc, room) => {
          return roomAcc + room.price * 0.2;
        }, 0)
      );
    }, 0);
    const total = sum - sale;
    setOriginalPrice(sum);
    setSalePrice(sale);
    setTotalPrice(total);
  }, [checkedHotel]);
  return (
    <StyleMainWrapper>
      {data &&
        data.data.accommodationList.map((accommodation) => (
          <>
            <StyledCartItemDesc key={accommodation.accommodationId}>
              <StyledItemTitle>
                <span>{accommodation.accommodationName}</span>
              </StyledItemTitle>
              <StyledAddress>
                <span>{accommodation.address}</span>
              </StyledAddress>
              <br />
            </StyledCartItemDesc>
            <StyledBox>
              <StyledList>
                <StyledListItem>
                  <StyledCheckbox
                    checked={checkedAllHotel}
                    onChange={handleAllCheckBoxChange}
                  />
                  <StyledTitleDesc>
                    <StyledSpan>전체 선택</StyledSpan>
                  </StyledTitleDesc>
                  <StyledTitleDesc>
                    <StyledProductSpan>예약 상품</StyledProductSpan>
                  </StyledTitleDesc>
                  <StyledTitleDesc>
                    <StyledSpan>날짜</StyledSpan>
                  </StyledTitleDesc>
                  <StyledTitleDesc>
                    <StyledSpan>가격</StyledSpan>
                  </StyledTitleDesc>
                </StyledListItem>
                <StyledLine />
                {accommodation.roomList.map((room) => (
                  <StyledListItem key={room.roomId}>
                    <StyledCheckbox
                      checked={
                        checkedAllHotel ||
                        checkedHotel.some(
                          (a) =>
                            a.accommodationId === accommodation.accommodationId,
                        )
                      }
                      onChange={() => handleCheckBoxChange(accommodation)}
                    />
                    <StyledMiniImage src={room.roomImageUrl} />
                    <StyleDetail>
                      <StyleRoomName>{room.type}</StyleRoomName>
                      <StyledDetailDes>
                        체크인 {room.checkIn} - 체크아웃 {room.checkOut}{' '}
                      </StyledDetailDes>
                      <StyledDetailDes>
                        기준 {room.capacity}인 최대 {room.maxCapacity}인
                      </StyledDetailDes>
                    </StyleDetail>
                    <StyleDetail>
                      <StyledDetailDes>
                        <p>
                          {room.startDate}~{room.endDate}
                        </p>
                      </StyledDetailDes>
                    </StyleDetail>
                    <StyleDetail>
                      <StyledDetailDes>
                        <p>
                          {' '}
                          <span>
                            {' '}
                            {(room.price * 1.2).toLocaleString('ko-KR')}원
                          </span>
                          {room.price.toLocaleString('ko-KR')}원
                        </p>
                      </StyledDetailDes>
                    </StyleDetail>
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledBox>
          </>
        ))}
      <StyleSubWrapper>
        <StyledPrice>예약상품</StyledPrice>
        <StyledPriceWrapper>
          <StyledPrices>상품 가격</StyledPrices>
          <StyledPricesValue>
            {originalPrice.toLocaleString('ko-KR')}원
          </StyledPricesValue>
        </StyledPriceWrapper>
        <StyledPriceWrapper>
          <StyledPrices>할인가</StyledPrices>
          <StyledPricesValue>
            -{salePrice.toLocaleString('ko-KR')}원
          </StyledPricesValue>
        </StyledPriceWrapper>
        <StyledLine />
        <StyledPriceWrapper>
          <StyledPrice>총 예상금액</StyledPrice>
          <StyledPrice>{totalPrice.toLocaleString('ko-KR')}원</StyledPrice>
        </StyledPriceWrapper>
      </StyleSubWrapper>
      <StyledButtonWrapper onClick={handleReservation}>
        <StyledBtnText>예약하기</StyledBtnText>
      </StyledButtonWrapper>
    </StyleMainWrapper>
  );
};
// 임시 추가
const StyledCartItemDesc = styled(StyledItemDesc)`
  margin-top: 4rem;
`;
const StyledProductSpan = styled.span`
  margin-right: 8.5rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyledSpan = styled.span`
  margin-right: 5rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyleDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyledTitleDesc = styled.div`
  display: flex;
  padding: 0.8rem 0 0.8rem 0;
`;

export const StyleRoomName = styled.div`
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
  color: ${theme.colors.navy};
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

export const StyledDetailDes = styled.div`
  font-weight: ${theme.fonts.subtitle5.fontWeight};
  font-size: ${theme.fonts.body.fontSize};

  /* display: block; */
  margin: 0 1rem 0.5rem 0;
  p {
    margin-top: 2.5rem;
    display: grid;
  }
  span {
    text-decoration: line-through;
    color: ${theme.colors.gray2};
    font-size: 0.8rem;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  vertical-align: top;
  box-shadow: none;
  outline: none;
`;

const StyledList = styled.ul`
  vertical-align: top;
`;

export const StyledListItem = styled.div`
  display: flex;
  margin: 2rem 0 2rem 0;
  gap: 1.25rem;
`;

export const StyledMiniImage = styled.img`
  width: 8rem;
  height: 6rem;
  border-radius: 8px;
`;
export const StyledPrice = styled.div`
  text-align: start;
  margin: 1rem 0;
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
  color: ${theme.colors.navy};
`;

export const StyledAddress = styled.div`
  font-weight: ${theme.fonts.subtitle5.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
  color: ${theme.colors.gray2};
  margin-bottom: 0.5rem;
`;

export const StyledBox = styled.div`
  width: 100%;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  text-align: start;
  padding: 0.5rem 1rem;
`;

export const StyleMainWrapper = styled.div`
  margin: 2.375rem auto 0 auto;
`;

export const StyleSubWrapper = styled.div`
  margin: 2rem 0 0 0;
  padding-left: 0;
  text-align: start;
`;

export const StyledLine = styled.hr`
  color: ${theme.colors.gray2};
  margin: 0.5rem 0;
`;

export const StyledPriceWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPricesValue = styled.span`
  vertical-align: top;
`;

export const StyledPrices = styled.span`
  text-align: start;
  margin: 0.5rem 0 0.5rem 1rem;
  font-weight: ${theme.fonts.subtitle5.fontWeight};
  font-size: ${theme.fonts.subtitle5.fontSize};
`;

// const StyledTrashCan = styled(FaTrashCan)`
//   /* padding-left: 3rem; */
//   margin: 2.5rem 0 0 5rem;
//   color: ${theme.colors.navy};
//   cursor: pointer;

//   &:hover {
//     color: ${theme.colors.gray3};
//   }
// `;
