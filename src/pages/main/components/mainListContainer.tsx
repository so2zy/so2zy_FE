import { theme } from '@styles/theme';
import styled from 'styled-components';
import MainListItem, { MainListProps } from './mainListItem';

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
  margin: 2rem 0 3.5rem 0;
  width: 100%;
`;

export const StyledTitle = styled.div`
  text-align: start;
  margin-bottom: 1.25rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${theme.colors.navy};
`;
