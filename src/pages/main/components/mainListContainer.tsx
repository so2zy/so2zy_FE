import { theme } from '@styles/theme';
import styled from 'styled-components';
import MainListItem from './mainListItem';
import { MainListProps } from './getPlaces';

const MainListContainer = ({ title }: MainListProps) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <MainListItem title={title} />
    </StyledWrapper>
  );
};

export default MainListContainer;

export const StyledWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem 1rem 5.5rem 1rem;
  /* border: 1px solid black; */
`;

export const StyledTitle = styled.div`
  text-align: start;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.navy};
`;
