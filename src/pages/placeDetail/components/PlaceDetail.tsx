// import { Header } from '@components/common/Header';
// import { Footer } from '@components/common/Footer';
import styled from 'styled-components';
import { GrLinkPrevious } from 'react-icons/gr';
import { theme } from '@styles/theme';
import { FaStar } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
// import { FaLocationArrow } from 'react-icons/fa';

const PlaceDetail = () => {
  return (
    <>
      <StyledContainer>
        <StyledBar>
          <StyledBefore />
          <StyledTitle>롯데 호텔</StyledTitle>
          <StyledSpan>
            <StyledButton>11.19~11.20 1박</StyledButton>
            <StyledButton>인원수 3명</StyledButton>
          </StyledSpan>
        </StyledBar>
      </StyledContainer>

      <StyledContainer>
        <StyledImg>호텔 이미지 들어갈 공간</StyledImg>
      </StyledContainer>

      <StyledContainer>
        <StyledMainTitle>
          롯데 호텔
          <StyledStar
          // className={isChecked ? 'checked' : 'unchecked'}
          // onClick={() => {
          //   setIsChecked((prev) => !prev);
          //   setStarBtnClicked(!starBtnClicked);
          // }}
          />
        </StyledMainTitle>
        <StyledLocation>
          숙소 위치 보기
          <MdPlace />
          {/* <FaLocationArrow /> */}
        </StyledLocation>
        <StyledDescription>서울특별시 송파구 올림픽로 300</StyledDescription>
        <StyledLine />
      </StyledContainer>

      <StyledContainer>
        <StyledLocation>객실 선택</StyledLocation>
        <StyledSubContainer>
          {/* <StyledDetailImg>숙소 사진</StyledDetailImg>
          <StyledDetailImg>STANDARD</StyledDetailImg> */}
        </StyledSubContainer>
      </StyledContainer>
    </>
  );
};
export default PlaceDetail;

const StyledLine = styled.hr`
  color: ${theme.colors.gray3};
  // margin: 1.5rem 4rem;
`;

const StyledContainer = styled.div`
  width: 100%;
  // margin: 0 auto;
`;

const StyledSubContainer = styled.div`
  // margin: 0 4rem;
  height: 10rem;
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  box-shadow: 1px 1px 1px ${theme.colors.gray2};
`;

const StyledMainTitle = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: ${theme.fonts.subtitle3.fontSize};
  font-weight: ${theme.fonts.subtitle1.fontWeight};
  // margin: 0 4rem;
  display: flex;
  align-items: center;
`;

const StyledStar = styled(FaStar)`
  margin-left: auto;
  vertical-align: top;
  font-size: ${theme.fonts.subtitle5.fontSize};
  color: ${theme.colors.yellow};

  // &.checked {
  //   color: ${theme.colors.yellow};
  // }
  // &.unchecked {
  //   color: ${theme.colors.gray1};
  // }
`;

const StyledLocation = styled.div`
  width: 100%;
  // margin: 0.5rem 4rem;
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

const StyledDescription = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  text-align: start;
  display: block;
  color: gray;
  font-size: ${theme.fonts.body.fontSize};
  font-weight: ${theme.fonts.body.fontWeight};
`;

const StyledImg = styled.div`
  width: 45rem;
  height: 25rem;
  background-color: ${theme.colors.gray2};
  margin: 1rem auto;
  border-radius: 4px;

  //반응형은 나중에
`;

const StyledBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const StyledBefore = styled(GrLinkPrevious)`
  vertical-align: top;
`;

const StyledTitle = styled.span`
  // flex: 1;
  margin-left: 18rem;
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
  margin-left: 1px;
  vertical-align: top;
  background-color: ${theme.colors.blue};
  color: white;
  border: none;
  border-radius: 6px;
  height: 1.75rem;
  padding: 0.25rem;
`;
