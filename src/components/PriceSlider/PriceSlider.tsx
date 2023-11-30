// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { priceAState } from 'recoil/searchList';
import { priceBState } from 'recoil/searchList';
import { isCheckedPriceState } from 'recoil/searchList';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { isClickedPriceState } from 'recoil/searchList';

const marks = [
  {
    value: 0,
    label: '0만원',
  },

  {
    value: 100,
    label: '100만원',
  },
];

export default function PriceSlider({
  closeModal,
}: {
  closeModal: () => void;
}) {
  // priceA가 200000원이면 A는 20만원
  const [priceA, setPriceA] = useRecoilState(priceAState);
  const [priceB, setPriceB] = useRecoilState(priceBState);
  const setIsCheckedPrice = useSetRecoilState(isCheckedPriceState);
  const setIsClickedPrice = useSetRecoilState(isClickedPriceState);
  const [A, setA] = useState(priceA / 10000);
  const [B, setB] = useState(priceB / 10000);

  const handleFilter = () => {
    setPriceA(A * 10000);
    setPriceB(B * 10000);
    setIsCheckedPrice(true);
    setIsClickedPrice(false);
    closeModal();
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.4rem',
          fontFamily: 'GmarketSans',
        }}
        gutterBottom
      >
        가격
      </Typography>
      <Slider
        aria-labelledby="track-inverted-range-slider"
        defaultValue={[0, 100]}
        // valueLabelDisplay="auto"
        marks={marks}
        onChange={(event, values: number | number[]) => {
          if (Array.isArray(values)) {
            setA(values[0]);
            setB(values[1]);
          }
        }}
        // color={theme.colors.navy}
      />
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          fontFamily: 'GmarketSans',
        }}
        gutterBottom
      >
        {A}만원 ~ {B}만원
      </Typography>
      <StyledButtonDiv onClick={handleFilter}>필터 적용하기</StyledButtonDiv>
    </Box>
  );
}
const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem 0 0.8rem;
  cursor: pointer;
  background-color: ${theme.colors.navy};
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
`;
