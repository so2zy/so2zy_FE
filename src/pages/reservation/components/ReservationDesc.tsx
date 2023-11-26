import { theme } from '@styles/theme';
import styled from 'styled-components';

const ReservationDesc = () => {
  return (
    <StyledWrapper>
      <StyledItemDesc>
        <StyledItemTitle>
          <span>남해 글리드810 풀빌라</span>
        </StyledItemTitle>
        <StyledItemSubTitle>
          <span>P1</span>
        </StyledItemSubTitle>
        <StyledAcceptPerson>
          <span>기준 2인/최대 2인</span>
        </StyledAcceptPerson>
        <StyledCheckIn>
          <p>체크인</p>
          <span>23.11.10(금) 15:00</span>
        </StyledCheckIn>
        <StyledCheckOut>
          <p>체크인</p>
          <span>23.11.10(금) 15:00</span>
        </StyledCheckOut>
      </StyledItemDesc>
      <StyledPriceBox>
        <StyledPayPrice>
          <span>결제 금액</span>
        </StyledPayPrice>
        <StyledItemPrice>
          <span>상품금액</span>
          <span>숙박/1박 81,000원</span>
        </StyledItemPrice>
        <StyledItemSalePrice>
          <span>할인</span>
          <StyledItemSaleText>
            <span>-2,500원</span>
            <span id="no-refund">※ 환불 불가 </span>
          </StyledItemSaleText>
        </StyledItemSalePrice>
        <StyledFinalPayPrice>
          <span>최종 결제 금액</span>
          <span>78,500원</span>
        </StyledFinalPayPrice>
      </StyledPriceBox>
    </StyledWrapper>
  );
};
export default ReservationDesc;

const StyledWrapper = styled.div`
  width: 54rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.gray2};
  margin-top: 4.375rem;
  padding: 3.5rem;
  margin: 4.375rem auto 0 auto;
`;

const StyledItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const StyledPriceBox = styled.div`
  width: 24rem;
  height: 12rem;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  text-align: start;
  padding: 1rem 2rem 0 2rem;
`;

const StyledItemTitle = styled.div`
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.navy};
  }
  padding-bottom: 0.4rem;
`;

const StyledItemSubTitle = styled.div`
  span {
    font-weight: bold;
    font-size: 1.25rem;
  }
  padding-bottom: 0.4rem;
`;

const StyledAcceptPerson = styled.div`
  span {
    font-weight: bold;
    font-size: 0.875rem;
    color: ${theme.colors.gray2};
  }
`;

const StyledCheckIn = styled.div`
  margin-top: 1.5rem;
  p {
    color: ${theme.colors.navy};
    font-weight: bold;
  }
`;

const StyledCheckOut = styled(StyledCheckIn)``;

const StyledItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    padding-bottom: 0.4rem;
  }
`;

const StyledPayPrice = styled.div`
  span {
    font-weight: bold;
    color: ${theme.colors.navy};
  }
  margin-top: 1rem;
  padding-bottom: 0.75rem;
`;

const StyledItemSalePrice = styled(StyledItemPrice)``;

const StyledItemSaleText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  #no-refund {
    font-weight: bold;
    color: red;
  }
`;

const StyledFinalPayPrice = styled(StyledItemPrice)`
  margin-top: 1rem;
  span {
    font-weight: bold;
  }
`;
