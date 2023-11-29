import { theme } from '@styles/theme';
import styled from 'styled-components';
import { Checkbox } from '@mui/material';
import { FaTrashCan } from 'react-icons/fa6';
import {
  StyledItemDesc,
  StyledItemTitle,
  StyledBtnText,
  StyledButtonWrapper,
} from 'pages/reservation/Reservation.page';

export interface cartItemProps {
  accommodationList: accommodationList[];
}

export interface accommodationList {
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
}
export const Cart: React.FC = () => {
  //전체 선택
  // const [selectAllChecked, setSelectAllChecked] = useState(false);
  // const [checkboxesChecked, setCheckboxesChecked] = useState(
  //   Array(checkboxData.length).fill(false)
  // );

  return (
    <StyleMainWrapper>
      <StyledItemDesc>
        <StyledItemTitle>
          <span>남해 글리드810 풀빌라</span>
        </StyledItemTitle>
        <StyledAddress>
          <span>경상북도 남해군 남면</span>
        </StyledAddress>
        <br />
      </StyledItemDesc>

      <StyledBox>
        <StyledList>
          <StyledListItem>
            {/* key 주기 */}
            <Checkbox />
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
          <StyledListItem>
            <StyledCheckbox />
            <StyledMiniImage src="https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg" />
            <StyleDetail>
              <StyleRoomName>P3</StyleRoomName>
              <StyledDetailDes>체크인 15:00 - 체크아웃 18:00 </StyledDetailDes>
              <StyledDetailDes>기준 2인 최대 4인</StyledDetailDes>
            </StyleDetail>
            <StyleDetail>
              <StyledDetailDes>
                <p>23.11.11-23.11.12</p>
              </StyledDetailDes>
            </StyleDetail>
            <StyleDetail>
              <StyledDetailDes>
                <p>75,000원</p>
              </StyledDetailDes>
            </StyleDetail>
            <StyleDetail>
              <StyledTrashCan />
            </StyleDetail>
          </StyledListItem>

          <StyledListItem>
            <StyledCheckbox />
            <StyledMiniImage src="https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg" />
            <StyleDetail>
              <StyleRoomName>P3</StyleRoomName>
              <StyledDetailDes>체크인 15:00 - 체크아웃 18:00 </StyledDetailDes>
              <StyledDetailDes>기준 2인 최대 4인</StyledDetailDes>
            </StyleDetail>
            <StyleDetail>
              <StyledDetailDes>
                <p>23.11.11-23.11.12</p>
              </StyledDetailDes>
            </StyleDetail>
            <StyleDetail>
              <StyledDetailDes>
                <p>75,000원</p>
              </StyledDetailDes>
            </StyleDetail>
            <StyleDetail>
              <StyledTrashCan />
            </StyleDetail>
          </StyledListItem>
        </StyledList>

        <StyledListItem>
          <StyledCheckbox />
          <StyledMiniImage src="https://yaimg.yanolja.com/v5/2022/10/31/12/1280/635fc0f6abccc1.66460254.jpg" />
          <StyleDetail>
            <StyleRoomName>P3</StyleRoomName>
            <StyledDetailDes>체크인 15:00 - 체크아웃 18:00 </StyledDetailDes>
            <StyledDetailDes>기준 2인 최대 4인</StyledDetailDes>
          </StyleDetail>
          <StyleDetail>
            <StyledDetailDes>
              <p>23.11.11-23.11.12</p>
            </StyledDetailDes>
          </StyleDetail>
          <StyleDetail>
            <StyledDetailDes>
              <p>75,000원</p>
            </StyledDetailDes>
          </StyleDetail>
          <StyleDetail>
            <StyledTrashCan />
          </StyleDetail>
        </StyledListItem>
      </StyledBox>

      <StyleSubWrapper>
        <StyledPrice>예약상품</StyledPrice>
        <StyledPriceWrapper>
          <StyledPrices>상품 가격</StyledPrices>
          <StyledPricesValue>225,000원</StyledPricesValue>
        </StyledPriceWrapper>
        <StyledPriceWrapper>
          <StyledPrices>할인가</StyledPrices>
          <StyledPricesValue>25,000원</StyledPricesValue>
        </StyledPriceWrapper>
        <StyledLine />
        <StyledPriceWrapper>
          <StyledPrice>총 예상금액</StyledPrice>
          <StyledPrice>200,000원</StyledPrice>
        </StyledPriceWrapper>
      </StyleSubWrapper>

      <StyledButtonWrapper>
        <StyledBtnText>예약하기</StyledBtnText>
      </StyledButtonWrapper>
    </StyleMainWrapper>
  );
};
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
  margin: 0 0 0.5rem 0rem;
  p {
    margin-top: 2.5rem;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  vertical-align: top;
`;

const StyledList = styled.ul`
  vertical-align: top;
`;

export const StyledListItem = styled.div`
  display: flex;
  margin-top: 2rem;
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

const StyledTrashCan = styled(FaTrashCan)`
  /* padding-left: 3rem; */
  margin: 2.5rem 0 0 5rem;
  color: ${theme.colors.navy};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.gray3};
  }
`;
