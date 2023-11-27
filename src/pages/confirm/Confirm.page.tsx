import styled from 'styled-components';
import { theme } from '@styles/theme';
import {
  StyledMiniImage,
  StyleRoomName,
  StyledDetailDes,
} from 'pages/cart/Cart.page';

export const Confirm: React.FC = () => {
  return (
    <>
      <StyleMainTitle>예약확인서</StyleMainTitle>

      <StyleMainWrapper>
        <StyleImportant>※법적 증빙서류 사용불가</StyleImportant>
        <StyleDescription>
          본 예약 확인인서는 구매내역 확인용도로만 사용하실 수 있습니다.
        </StyleDescription>
        <StyleDescription>
          법적 증빙 서류가 필요하신 경우 결제 영수증을 확인하시길 바랍니다.
        </StyleDescription>
      </StyleMainWrapper>

      <StyleMainTitle>주문정보</StyleMainTitle>

      <StyleMainWrapper>
        <StyleDescription>통합 주문번호: 1234567890</StyleDescription>
        <StyleDescription>거래일시: 2022.06.25(토)</StyleDescription>
      </StyleMainWrapper>

      <StyleMainTitle>상품이용 및 이용정보</StyleMainTitle>

      <StyleMainWrapper>
        <StyleDescription>숙소 예약번호: 489598</StyleDescription>
        <StyleSubWrapper>
          <StyledMiniImage src="https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg" />
          <StyleDetail>
            <StyleRoomName>P3</StyleRoomName>
            <StyledDetailDes>체크인 15:00 - 체크아웃 18:00 </StyledDetailDes>
            <StyledDetailDes>기준 2인 최대 4인</StyledDetailDes>
          </StyleDetail>
          <StyleDetail>
            <StyledDetailDes>23.11.11-23.11.12</StyledDetailDes>
          </StyleDetail>
          <StyleDetail>
            <StyledDetailDes>75,000원</StyledDetailDes>
          </StyleDetail>
        </StyleSubWrapper>
      </StyleMainWrapper>
    </>
  );
};

export const StyleDetail = styled.div`
  display: inline-block;
  margin: 0.5rem 0 0 2.5rem;
  font-weight: ${theme.fonts.subtitle3.fontWeight};
`;

const StyleMainTitle = styled.div`
  text-align: start;
  color: ${theme.colors.navy};
  font-size: ${theme.fonts.subtitle3.fontSize};
  font-weight: 900;
  line-height: ${theme.fonts.subtitle4.lineHeight};
`;

const StyleMainWrapper = styled.div`
  display: block;
  text-align: start;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  padding: 1rem;
  margin-bottom: 2rem;
`;

const StyleSubWrapper = styled.span`
  border: 0.5px solid ${theme.colors.gray2};
  box-shadow: 2px 2px 2px ${theme.colors.gray2};
  border-radius: 8px;
  display: flex;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const StyleDescription = styled.div`
  font-color: ${theme.colors.navy};
  font-size: ${theme.fonts.subtitle5.fontSize};
  font-weight: ${theme.fonts.subtitle5.fontWeight};
  line-height: ${theme.fonts.subtitle4.lineHeight};
  font-weight: bold;
`;

const StyleImportant = styled.div`
  color: ${theme.colors.error};
  font-size: ${theme.fonts.subtitle5.fontSize};
  font-weight: ${theme.fonts.subtitle5.fontWeight};
  line-height: ${theme.fonts.subtitle4.lineHeight};
  font-weight: bold;
`;
