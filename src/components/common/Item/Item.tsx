import styled from 'styled-components';
import { theme } from '@styles/theme';
import { FaStar } from 'react-icons/fa';
import hotelDefaultImg from '@assets/images/hotelDefaultImg.png';

interface ItemProps {
  image: string;
  name: string;
  likeCount: number;
  price: number;
  onClick?: () => void;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  // const { name, image, favorites, regularPrice, price, salesCount } = props;
  const { name, likeCount, image, price, onClick } = props;
  const regularPrice = price * 1.2;

  return (
    <StyledItem onClick={onClick}>
      <StyledImgWrapper>
        {image ? (
          <StyledImg src={image} alt="호텔 이미지" />
        ) : (
          <StyledImg src={hotelDefaultImg} alt="대체 이미지" />
        )}
      </StyledImgWrapper>
      <StyledInfo>
        <StyledNameWrapper>
          <StyledName>{name}</StyledName>
          {/* {salesCount} */}
          <StyleStarWrapper>
            <StyledStar className={likeCount > 0 ? 'checked' : 'unchecked'} />
          </StyleStarWrapper>
        </StyledNameWrapper>
        <StyledPriceWrapper>
          <StyledRegularPrice>
            {regularPrice.toLocaleString('ko-KR')}원
          </StyledRegularPrice>
          <Styledprice>{price.toLocaleString('ko-KR')}원 ~</Styledprice>
        </StyledPriceWrapper>
      </StyledInfo>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 0.5rem;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  width: 90%;
  height: 9rem;
  padding: 0.5rem;
  margin: 0.5rem auto;
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;
  // background-color: ${theme.colors.gray3};
  cursor: pointer;
  position: relative;
  :hover {
  }
`;

const StyledImgWrapper = styled.div``;

const StyledImg = styled.img`
  border-radius: 0.5rem;
  width: 90%;
  height: 8rem;
`;

const StyledInfo = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0.75rem 0.5rem;
`;

const StyledNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledName = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledPriceWrapper = styled.div`
  text-align: right;
`;

const StyledRegularPrice = styled.div`
  color: gray;
  text-decoration: line-through;
  text-decoration-color: gray;
  text-decoration-thickness: 2px;
`;

const Styledprice = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

const StyleStarWrapper = styled.div`
  min-width: 1.5rem;
  min-height: 1.5rem;
`;

const StyledStar = styled(FaStar)`
  min-width: 100%;
  min-height: 100%;
  color: ${theme.colors.yellow};
  cursor: pointer;
  &.checked {
    color: ${theme.colors.yellow};
  }
  &.unchecked {
    color: ${theme.colors.gray1};
  }
`;
