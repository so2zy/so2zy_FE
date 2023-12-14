import { theme } from '@styles/theme';
import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import {
  StyledItemDesc,
  StyledItemTitle,
  StyledBtnText,
  StyledButtonWrapper,
} from 'pages/reservation/Reservation.page';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCarts } from '@api/getCart';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import hotelDefaultImg from '@assets/images/hotelDefaultImg.png';
import { FaTrashCan } from 'react-icons/fa6';
import { deleteCart } from '@api/deleteCart';

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
  roomCartId: number;
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

export interface CartDeletedProps {
  roomId: number;
  startDate: string;
  endDate: string;
}
export const Cart: React.FC = () => {
  const { data } = useQuery<CartItemProps>({
    queryKey: ['mycarts'],
    queryFn: getCarts,
  });

  const [checkedHotel, setCheckedHotel] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [checkedAllHotel, setCheckedAllHotel] = useState<boolean>(false);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [salePrice, setSalePrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const handleCheckboxChange = (
    accommodationId: number,
    roomCartId: number,
    roomId: number,
  ) => {
    setCheckedHotel((prevChecked) => {
      const key = `${accommodationId}-${roomCartId}-${roomId}`;
      const updatedChecked = {
        ...prevChecked,
        [key]: checkedAllHotel ? !prevChecked[key] : !prevChecked[key],
      };

      return updatedChecked;
    });
    if (checkedAllHotel) {
      setCheckedAllHotel(false);
    }
  };

  const handleAllCheckBoxChange = () => {
    setCheckedAllHotel((prev) => !prev);

    if (data && data.data) {
      const updatedChecked: { [key: string]: boolean } = {};
      data.data.accommodationList.forEach((accommodation) => {
        accommodation.roomList.forEach((room) => {
          const key = `${accommodation.accommodationId}-${room.roomCartId}-${room.roomId}`;
          updatedChecked[key] = !checkedAllHotel;
        });
      });

      setCheckedHotel(updatedChecked);
    }
  };

  const handleReservation = () => {
    const checkedItems = Object.entries(checkedHotel)
      .filter(([key, isChecked]) => isChecked)
      .map(([key]) => {
        const [accommodationId, roomCartId, roomId] = key.split('-');
        const accommodation = data?.data.accommodationList.find(
          (acc) => acc.accommodationId === Number(accommodationId),
        );
        const room = accommodation?.roomList.find(
          (r) => r.roomCartId === Number(roomCartId),
        );

        return {
          accommodation,
          checkedItemId: key,
        };
      });

    navigate(`/cartreservation`, { state: { checkedItems } });
  };

  const handleDeleteItem = async (
    roomId: number,
    startDate: string,
    endDate: string,
  ) => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (!confirmDelete) {
      return;
    }

    try {
      const deleteData = {
        roomId,
        startDate,
        endDate,
      };
      await deleteCart(deleteData);

      queryClient.invalidateQueries({ queryKey: ['mycarts'] });
    } catch (error) {
      throw new Error('삭제 실패');
    }
  };

  useEffect(() => {
    let originalSum = 0;
    let saleSum = 0;
    let totalSum = 0;

    Object.entries(checkedHotel).forEach(([key, isChecked]) => {
      if (isChecked) {
        const [accommodationId, roomCartId, roomId] = key.split('-');
        const accommodation = data?.data.accommodationList.find(
          (acc) => acc.accommodationId === Number(accommodationId),
        );
        const room = accommodation?.roomList.find(
          (r) => r.roomCartId === Number(roomCartId),
        );

        if (room) {
          originalSum += room.price * 1.2;
          saleSum += room.price * 0.2;
          totalSum += room.price;
        }
      }
    });

    setOriginalPrice(originalSum);
    setSalePrice(saleSum);
    setTotalPrice(totalSum);
    console.log(checkedHotel);
  }, [checkedHotel, data]);
  return (
    <StyleMainWrapper>
      <StyledTitleDesc>
        <StyledCheckbox
          checked={checkedAllHotel}
          onChange={handleAllCheckBoxChange}
        />
        <StyledAllCheckSpan>
          {checkedAllHotel ? '전체 해제' : '전체 선택'}
        </StyledAllCheckSpan>
      </StyledTitleDesc>
      {data?.data.accommodationList.map((accommodation) => (
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
              <StyledListTitle>
                <StyledWrapper>
                  <StyledTitleDesc>
                    <StyledProductSpan>예약 상품</StyledProductSpan>
                  </StyledTitleDesc>
                  <StyledTitleDesc>
                    <StyledDateSpan>날짜</StyledDateSpan>
                  </StyledTitleDesc>
                  <StyledPriceTitleDesc>
                    <StyledSpan>가격</StyledSpan>
                  </StyledPriceTitleDesc>
                </StyledWrapper>
              </StyledListTitle>
              <StyledLine />
              {accommodation.roomList.map((room) => (
                <StyledListItem key={room.roomId}>
                  <StyledCheckbox
                    checked={
                      checkedHotel[
                        `${accommodation.accommodationId}-${room.roomCartId}-${room.roomId}`
                      ] || checkedAllHotel
                    }
                    onChange={() =>
                      handleCheckboxChange(
                        accommodation.accommodationId,
                        room.roomCartId,
                        room.roomId,
                      )
                    }
                  />
                  {room.roomImageUrl ? (
                    <StyledMiniImage src={room.roomImageUrl} />
                  ) : (
                    <StyledMiniImage src={hotelDefaultImg} alt="대체 사진" />
                  )}
                  <StyleDetail>
                    <StyleRoomName>{room.type}</StyleRoomName>
                    <StyledCheckInOutTitle>
                      체크인 {room.checkIn.replace(/:00$/, '')} - 체크아웃{' '}
                      {room.checkOut.replace(/:00$/, '')}
                    </StyledCheckInOutTitle>
                    <StyledCheckInOutTitle>
                      기준 {room.capacity}인 최대 {room.maxCapacity}인
                    </StyledCheckInOutTitle>
                  </StyleDetail>
                  <StyleDetail>
                    <StyledDetailDes>
                      <p>
                        {room.startDate.slice(2)}~{room.endDate.slice(2)}
                      </p>
                    </StyledDetailDes>
                  </StyleDetail>
                  <StyleDetail>
                    <StyledDetailDes>
                      <p id="priceDesc">
                        <span>
                          {(room.price * 1.2).toLocaleString('ko-KR')}원
                        </span>
                        {room.price.toLocaleString('ko-KR')}원
                      </p>
                    </StyledDetailDes>
                  </StyleDetail>
                  <StyledTrashCan
                    onClick={() =>
                      handleDeleteItem(
                        room.roomId,
                        room.startDate,
                        room.endDate,
                      )
                    }
                  />
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

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTitleDesc = styled.div`
  display: flex;
  padding: 0.8rem 0 0.8rem 0.4rem;
`;

const StyledPriceTitleDesc = styled.div`
  display: flex;
  padding: 0.8rem 0 0.8rem 6rem;
`;

const StyledProductSpan = styled.span`
  margin-right: 8.5rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyledSpan = styled.span`
  margin-right: 5rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyledDateSpan = styled(StyledSpan)`
  padding-left: 1.2rem;
`;

const StyledCartItemDesc = styled(StyledItemDesc)`
  margin-top: 4rem;
`;

const StyledAllCheckSpan = styled(StyledSpan)`
  padding-top: 0.9rem;
  font-size: 1.1rem;
`;

const StyleDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
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
  margin: 0 1rem 0rem 0.2rem;
  p {
    margin: 2rem 0 0 -1.2rem;
    display: grid;
  }
  #priceDesc {
    margin-top: 1.5rem;
    margin-left: 1.5rem;
  }
  span {
    text-decoration: line-through;
    color: ${theme.colors.gray2};
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
`;

export const StyledCheckInOutTitle = styled(StyledDetailDes)`
  margin-left: 0.05rem;
  margin-bottom: 0.2rem;
`;

export const StyledDetailDescription = styled.div`
  font-weight: ${theme.fonts.subtitle5.fontWeight};
  font-size: ${theme.fonts.body.fontSize};
  margin: 0 1rem 0rem 0;
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

const StyledListTitle = styled(StyledListItem)`
  margin-left: 14rem;
  gap: 2.5rem;
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

const StyledTrashCan = styled(FaTrashCan)`
  margin: 2rem 0 0 2rem;
  color: ${theme.colors.navy};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.gray3};
  }
`;
