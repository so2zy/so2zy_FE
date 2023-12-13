import { Checkbox } from '@mui/material';
import { theme } from '@styles/theme';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postPayment } from '@api/postCartReservation';
interface CartReservationHotelsProps {
  accommodation: {
    accommodationId: number;
    accommodationName: string;
    address: string;
    roomList: CartReservationRoomProps[];
  };
}
interface CartReservationRoomProps {
  capacity: number;
  checkIn: string;
  checkOut: string;
  endDate: string;
  maxCapacity: number;
  personnel: number;
  price: number;
  roomId: number;
  roomImageUrl: string;
  startDate: string;
  type: string;
}

export interface PostPaymentProps {
  roomList: CartReservationRoomProps[];
  agreement: boolean;
  isFromCart: boolean;
}
export const CartReservation: React.FC = () => {
  const location = useLocation();
  const checkedHotel = location.state?.checkedItems || [];
  console.log(checkedHotel);
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState(false);

  const mutation = useMutation({
    mutationFn: postPayment,
    onSuccess(data) {
      navigate('/confirm', { state: { data } });
    },
    onError(err) {
      throw new Error('결제 실패');
    },
  });

  const handlePayment = () => {
    if (!agreement) {
      return;
    }

    const postData = checkedHotel?.flatMap(
      (checkedHotel: CartReservationHotelsProps) =>
        checkedHotel.accommodation.roomList.map(
          (roomInfo: CartReservationRoomProps) => ({
            roomId: roomInfo.roomId,
            startDate: roomInfo.startDate,
            endDate: roomInfo.endDate,
            price: roomInfo.price,
            personnel: roomInfo.personnel,
          }),
        ),
    );
    console.log(postData);

    const data = {
      roomList: postData,
      agreement,
      isFromCart: true,
    };

    const confirm = window.confirm('결제 하시겠습니까?');
    if (!confirm) {
      return;
    }
    mutation.mutate(data);
  };

  const calculatePrices = (roomInfo: CartReservationRoomProps) => {
    const originalPrice = roomInfo.price * 1.2;
    const salePrice = roomInfo.price * 0.2;

    return { originalPrice, salePrice };
  };
  const calculateTotalPrice = () => {
    let total = 0;

    if (checkedHotel) {
      checkedHotel.forEach((checkedHotel: CartReservationHotelsProps) => {
        if (checkedHotel.accommodation.roomList) {
          checkedHotel.accommodation.roomList.forEach(
            (roomInfo: CartReservationRoomProps) => {
              if (roomInfo) {
                const { originalPrice, salePrice } = calculatePrices(roomInfo);

                // 디버깅을 위한 중간 결과 출력
                console.log('Room Info:', roomInfo);
                console.log('Original Price:', originalPrice);
                console.log('Sale Price:', salePrice);

                total += roomInfo.price; // Assuming the price is directly available in roomInfo
              }
            },
          );
        }
      });

      // 최종 합산된 가격 출력
      console.log('Total Price:', total);

      return total.toLocaleString('ko-KR');
    } else {
      return '0원';
    }
  };

  return (
    <>
      {checkedHotel.map((checkedHotel: any) => (
        // <StyledItemWrapper key={checkedHotel.accommodation.accommodationId}>
        <StyledWrapper key={checkedHotel.accommodation.accommodationId}>
          <StyledItemWrapper>
            {checkedHotel.accommodation.roomList.map(
              (roomInfo: CartReservationRoomProps) => (
                <StyledItemContainer key={roomInfo.roomId}>
                  <StyledItemDesc>
                    <StyledItemTitle>
                      <span>
                        {checkedHotel.accommodation.accommodationName}
                      </span>
                    </StyledItemTitle>
                    <StyledItemSubTitle>
                      <span>{roomInfo.type}</span>
                    </StyledItemSubTitle>
                    <StyledAcceptPerson>
                      <span>
                        기준 {roomInfo.capacity}인/최대 {roomInfo.maxCapacity}인
                      </span>
                    </StyledAcceptPerson>
                    <StyledCheckIn>
                      <p>체크인</p>
                      <span>
                        {roomInfo.startDate}{' '}
                        {roomInfo.checkIn.replace(/:00$/, '')}
                      </span>
                    </StyledCheckIn>
                    <StyledCheckOut>
                      <p>체크아웃</p>
                      <span>
                        {roomInfo.endDate}{' '}
                        {roomInfo.checkOut.replace(/:00$/, '')}
                      </span>
                    </StyledCheckOut>
                  </StyledItemDesc>
                  <StyledPriceBox>
                    <StyledPayPrice>
                      <span>결제 금액</span>
                    </StyledPayPrice>
                    <StyledItemPrice>
                      <span>상품금액</span>
                      <span>
                        숙박/1박 {calculatePrices(roomInfo).originalPrice}원
                      </span>
                    </StyledItemPrice>
                    <StyledItemSalePrice>
                      <span>할인</span>
                      <StyledItemSaleText>
                        <span id="no-refund">※ 환불 불가 </span>
                      </StyledItemSaleText>
                    </StyledItemSalePrice>
                    <StyledFinalPayPrice>
                      <span>최종 결제 금액</span>
                      <span>{roomInfo.price}원</span>
                    </StyledFinalPayPrice>
                  </StyledPriceBox>
                </StyledItemContainer>
              ),
            )}
          </StyledItemWrapper>
        </StyledWrapper>
      ))}
      <StyledRuleWrapper>
        <StyledEssentialTerms>
          <span>필수 약관 동의</span>
          <StyledEssentialCheckList>
            <CheckboxContainer>
              <Checkbox
                onClick={() => {
                  setAgreement((prev) => !prev);
                }}
              />
              <CheckboxText>[필수]개인정보 수집 및 이용</CheckboxText>
            </CheckboxContainer>
            <StyledPayText>
              <span>※ 이용규칙, 취소 및 환불 규칙</span>에 동의하실 경우
              결제버튼이 활성화 됩니다.
            </StyledPayText>
          </StyledEssentialCheckList>
        </StyledEssentialTerms>
      </StyledRuleWrapper>
      {agreement ? (
        <StyledButtonWrapper onClick={handlePayment}>
          <StyledBtnText>{calculateTotalPrice()}원 결제하기</StyledBtnText>
        </StyledButtonWrapper>
      ) : null}
    </>
  );
};

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledButtonWrapper = styled.div`
  width: 100%;
  margin: 2rem auto 1rem auto;
  border: 1px solid black;
  margin-right: 0.4rem;
  padding: 0.8rem;
  text-align: center;
  background-color: ${theme.colors.navy};
  border-radius: 0.825rem;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: ${theme.shadows.shadow3};
    opacity: 80%;
  }
`;

export const StyledBtnText = styled.p`
  color: #fff;
  font-weight: bold;
  padding: 0.2rem;
`;

export const StyledRuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.4rem;
  margin-top: 2rem;
  /* border: 1px solid black; */
`;

export const StyledEssentialTerms = styled.div`
  /* border: 1px solid black; */
  margin: 2rem;
  text-align: start;
  span {
    padding-left: 0.75rem;
    font-weight: bold;
    color: ${theme.colors.navy};
  }
`;

const StyledItemContainer = styled.div`
  display: flex;
  gap: 11rem;
  margin-bottom: 2.5rem;
`;

export const StyledEssentialCheckList = styled.div``;

export const StyledPayText = styled.p`
  text-align: start;
  margin-left: 0.75rem;
  span {
    color: red;
    font-weight: bold;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const CheckboxText = styled.p`
  line-height: 2.65rem;
  font-weight: bold;
  font-size: 0.95rem;
`;

export const StyledWrapper = styled.div`
  width: 54rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.gray2};
  padding: 3.5rem;
  margin: 2rem auto 0 auto;
`;

export const StyledItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const StyledPriceBox = styled.div`
  width: 24rem;
  height: 12rem;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  text-align: start;
  padding: 1rem 2rem 0 2rem;
`;

export const StyledItemTitle = styled.div`
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.navy};
  }
  padding-bottom: 0.4rem;
`;

export const StyledItemSubTitle = styled.div`
  span {
    font-weight: bold;
    font-size: 1.25rem;
  }
  padding-bottom: 0.4rem;
`;

export const StyledAcceptPerson = styled.div`
  span {
    font-weight: bold;
    font-size: 0.875rem;
    color: ${theme.colors.gray2};
  }
`;

export const StyledCheckIn = styled.div`
  margin-top: 1.5rem;
  p {
    color: ${theme.colors.navy};
    font-weight: bold;
    padding-bottom: 0.2rem;
  }
`;

export const StyledCheckOut = styled(StyledCheckIn)``;

export const StyledItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    padding-bottom: 0.4rem;
  }
`;

export const StyledPayPrice = styled.div`
  span {
    font-weight: bold;
    color: ${theme.colors.navy};
  }
  margin-top: 1rem;
  padding-bottom: 0.75rem;
`;

export const StyledItemSalePrice = styled(StyledItemPrice)``;

export const StyledItemSaleText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  #no-refund {
    font-weight: bold;
    color: red;
  }
`;

export const StyledFinalPayPrice = styled(StyledItemPrice)`
  margin-top: 1rem;
  span {
    font-weight: bold;
  }
`;
