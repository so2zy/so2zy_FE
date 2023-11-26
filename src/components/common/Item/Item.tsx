import styled from 'styled-components';
import { theme } from '@styles/theme';
import { FaStar } from 'react-icons/fa';
interface ItemProps {
  // image: string;
  name: string;
  favorites: boolean;
  regularPrice: number;
  discountPrice: number;
  // salesCount: number;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  // const { name, image, favorites, regularPrice, discountPrice, salesCount } = props;
  const { name, favorites, regularPrice, discountPrice } = props;

  return (
    <StyledItem>
      <StyledImgWrapper>
        <img
          src="https://yaimg.yanolja.com/v5/2022/10/26/14/1280/6359424d363cb1.59078840.jpg"
          alt="z"
        />
      </StyledImgWrapper>
      <StyledInfo>
        <StyledNameWrapper>
          <StyledName>{name}</StyledName>
          {/* {salesCount} */}
          <StyleStarWrapper>
            <StyledStar className={favorites ? 'checked' : 'unchecked'} />
          </StyleStarWrapper>
        </StyledNameWrapper>
        <StyledPriceWrapper>
          <StyledRegularPrice>
            {regularPrice.toLocaleString('ko-KR')}원
          </StyledRegularPrice>
          <StyledDiscountPrice>
            {discountPrice.toLocaleString('ko-KR')}원
          </StyledDiscountPrice>
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

const StyledImgWrapper = styled.div`
  img {
    border-radius: 0.5rem;
    width: 90%;
    height: 100%;
  }
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

const StyledDiscountPrice = styled.div`
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
