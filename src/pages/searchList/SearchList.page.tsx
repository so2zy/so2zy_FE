import styled from 'styled-components';
// import { GrLinkPrevious } from 'react-icons/gr';
// import { theme } from '@styles/theme';
// import { FaStar } from 'react-icons/fa';
// import { MdPlace } from 'react-icons/md';
import { Item } from '@components/common/Item';
import { useEffect, useState } from 'react';

interface Hotel {
  id: number;
  name: string;
  // image: string;
  favorites: boolean;
  regularPrice: number;
  discountPrice: number;
}

export const SearchList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    fetch('/api/searchList')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotels(data);
      });
  }, []);

  return (
    <StyledContainer>
      {hotels.map((hotel) => {
        return (
          <Item
            key={hotel.id}
            name={hotel.name}
            // image={hotel.image}
            favorites={hotel.favorites}
            regularPrice={hotel.regularPrice}
            discountPrice={hotel.discountPrice}
          />
        );
      })}
    </StyledContainer>
  );
};

// const StyledLine = styled.hr`
//   color: ${theme.colors.gray3};
//   // margin: 1.5rem 4rem;
// `;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem auto;
  width: 50%;
  border: 1px solid black;
  align-items: center;
  justify-items: center;
`;

// const StyledMainTitle = styled.div`
//   display: inline-block;
//   vertical-align: top;
//   font-size: ${theme.fonts.subtitle3.fontSize};
//   font-weight: ${theme.fonts.subtitle1.fontWeight};
//   // margin: 0 4rem;
//   display: flex;
//   align-items: center;
// `;

// const StyledStar = styled(FaStar)`
//   margin-left: auto;
//   vertical-align: top;
//   font-size: ${theme.fonts.subtitle5.fontSize};
//   color: ${theme.colors.yellow};

//   // &.checked {
//   //   color: ${theme.colors.yellow};
//   // }
//   // &.unchecked {
//   //   color: ${theme.colors.gray1};
//   // }
// `;

// const StyledLocation = styled.div`
//   width: 100%;
//   // margin: 0.5rem 4rem;
//   text-align: start;
//   color: ${theme.colors.navy};
//   font-size: ${theme.fonts.subtitle5.fontSize};
//   font-weight: ${theme.fonts.subtitle3.fontWeight};
//   display: block;
//   cursor: pointer;

//   &:hover {
//     border: none;
//     color: ${theme.colors.gray2};
//   }
// `;

// const StyledDescription = styled.div`
//   width: 100%;
//   margin: 0.5rem 0;
//   text-align: start;
//   display: block;
//   color: gray;
//   font-size: ${theme.fonts.body.fontSize};
//   font-weight: ${theme.fonts.body.fontWeight};
// `;

// const StyledBar = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0 1rem;
// `;

// const StyledBefore = styled(GrLinkPrevious)`
//   vertical-align: top;
// `;

// const StyledTitle = styled.span`
//   // flex: 1;
//   margin-left: 18rem;
//   text-align: center;
//   vertical-align: top;
//   font-size: ${theme.fonts.subtitle4.fontSize};
//   font-weight: ${theme.fonts.subtitle3.fontWeight};
// `;

// const StyledSpan = styled.span`
//   margin-left: auto;
//   vertical-align: top;
// `;

// const StyledButton = styled.button`
//   margin-left: 1px;
//   vertical-align: top;
//   background-color: ${theme.colors.blue};
//   color: white;
//   border: none;
//   border-radius: 6px;
//   height: 1.75rem;
//   padding: 0.25rem;
// `;
