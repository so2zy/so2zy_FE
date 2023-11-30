import styled from 'styled-components';
import Logo from '@assets/images/mainLogoThree.png';
const Footer = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledDiv>
          Aroom은 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약,
          이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </StyledDiv>
        <StyledDiv>
          <StyledDivFlex>
            <img alt="Aroom" src={Logo} />
            <StyledSpan>Fe :</StyledSpan>
            <span>어승준 </span>
            <span>채민석 </span>
            <span>김민서 </span>
            <span>진종수 </span>
            <StyledSpan>Be :</StyledSpan>
            <span>구자현 </span>
            <span>양유림 </span>
            <span>권민우 </span>
            <span>차동민</span>
          </StyledDivFlex>
        </StyledDiv>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.04) 0px -5px 10px 0px;
  width: 100%;
  height: 5rem;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  height: 100%;
  span {
    font-weight: 700;
    font-size: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;
const StyledDiv = styled.div`
  width: 100%;
  height: 1.2rem;
  &:first-child {
    margin-top: 1.5rem;

    font-size: 0.9rem;
    color: #919191;
  }
  margin-top: 0.5rem;
`;
const StyledDivFlex = styled.div`
  img {
    position: relative;
    top: 2px;
    width: 6rem;
  }
`;
const StyledSpan = styled.span`
  font-size: 1.2rem !important;
  margin-left: 2rem;
`;
