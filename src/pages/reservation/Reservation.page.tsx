import { Checkbox } from '@mui/material';
import { theme } from '@styles/theme';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { RoomList, IAccommodations } from 'pages/placeDetail/PlaceDetail.page';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Reservation: React.FC = () => {
  const location = useLocation();

  const [accommodationInfo, setAccommodationInfo] = useState<IAccommodations>();
  const [roomInfo, setRoomInfo] = useState<RoomList>();
  const [agreement, setAgreement] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [personnel, setPersonnel] = useState('');
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setAccommodationInfo(location.state.accommodation);
      setRoomInfo(location.state.room);
      setPersonnel(location.state.personnel);
      setStartDate(location.state.startDate);
      setEndDate(location.state.endDate);
    }
  }, [location.state]);

  const handlePayment = async () => {
    if (!roomInfo || !agreement) {
      return;
    }

    const data = {
      roomList: [
        {
          roomId: roomInfo.id,
          startDate: startDate,
          endDate: endDate,
          price: roomInfo.price,
          personnel: personnel,
        },
      ],
      agreement,
      isFromCart: false,
    };

    const confirm = window.confirm('결제 하시겠습니까?');
    if (!confirm) {
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/v1/reservations`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Token': accessToken,
          },
        },
      );

      navigate('/confirm', { state: { data: response.data } });
    } catch (error) {
      console.error('결제 실패', error);
    }
  };

  return (
    <>
      <StyledWrapper>
        <StyledItemDesc>
          <StyledItemTitle>
            <span>{accommodationInfo?.accommodationName}</span>
          </StyledItemTitle>
          <StyledItemSubTitle>
            <span>{roomInfo?.type}</span>
          </StyledItemSubTitle>
          <StyledAcceptPerson>
            <span>
              기준 {roomInfo?.capacity}인/최대 {roomInfo?.maxCapacity}인
            </span>
          </StyledAcceptPerson>
          <StyledCheckIn>
            <p>체크인</p>
            <span>
              {startDate} {roomInfo?.checkIn}
            </span>
          </StyledCheckIn>
          <StyledCheckOut>
            <p>체크아웃</p>
            <span>
              {endDate} {roomInfo?.checkOut}
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
              숙박/1박
              {roomInfo?.price.toLocaleString('ko-KR')
                ? (roomInfo.price * 1.2).toLocaleString('ko-KR')
                : 0}
              원
            </span>
          </StyledItemPrice>
          <StyledItemSalePrice>
            <span>할인</span>
            <StyledItemSaleText>
              <span>
                -
                {roomInfo?.price.toLocaleString('ko-KR')
                  ? (roomInfo.price * 0.2).toLocaleString('ko-KR')
                  : 0}
                원
              </span>
              <span id="no-refund">※ 환불 불가 </span>
            </StyledItemSaleText>
          </StyledItemSalePrice>
          <StyledFinalPayPrice>
            <span>최종 결제 금액</span>
            <span>{roomInfo?.price.toLocaleString('ko-KR')}원</span>
          </StyledFinalPayPrice>
        </StyledPriceBox>
      </StyledWrapper>

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
          <StyledBtnText>
            {roomInfo?.price.toLocaleString('ko-KR')}원 결제하기
          </StyledBtnText>
        </StyledButtonWrapper>
      ) : (
        ''
      )}
    </>
  );
};

export const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  padding-top: 0.2rem;
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
  padding: 1rem;
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
