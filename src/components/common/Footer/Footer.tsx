import styled from 'styled-components';
import Logo from '@assets/images/mainLogoThree.png';
const Footer = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledImgCover>
          <img src={Logo} alt="" />
        </StyledImgCover>

        <StyledDiv>
          <span>
            {' '}
            Aroom은 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약,
            이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </span>
        </StyledDiv>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Footer;
const StyledImgCover = styled.div`
  margin-right: 2rem;
  img {
    position: relative;
    width: 6rem;
  }
`;
const StyledWrapper = styled.div`
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.04) 0px -5px 10px 0px;
  width: 100%;
  height: 4rem;
  img {
    width: 5rem;
  }
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;
  height: 100%;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;
const StyledDiv = styled.div`
  display: flex-end;
  height: 1.2rem;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #919191;
  margin-top: 0.5rem;
`;
