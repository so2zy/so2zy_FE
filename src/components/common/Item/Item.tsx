import styled from 'styled-components';
import { theme } from '@styles/theme';

interface ItemProps {
  // image: string;
  name: string;
  favorites: boolean;
  regularPrice: number;
  discountPrice: number;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  // const { name, image, favorites, regularPrice, discountPrice } = props;
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
          <div style={{ textAlign: 'left', fontWeight: 'bold' }}>{name}</div>
          <div>찜{favorites}</div>
        </StyledNameWrapper>
        <StyledPriceWrapper>
          <StyledRegularPrice>{regularPrice}원</StyledRegularPrice>
          <div style={{ fontWeight: 'bold' }}>{discountPrice}원</div>
        </StyledPriceWrapper>
      </StyledInfo>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};
  height: 10rem;
  width: 20rem;
  padding: 0.5rem;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

const StyledImgWrapper = styled.div`
  img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const StyledNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
