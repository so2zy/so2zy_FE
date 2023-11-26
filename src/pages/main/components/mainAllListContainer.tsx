import { MainListProps } from './getPlaces';
import MainAllListItem from './mainAllListItem';
import { StyledTitle, StyledWrapper } from './mainListContainer';

const MainAllListContainer = ({ title }: MainListProps) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <MainAllListItem title={title} />
    </StyledWrapper>
  );
};

export default MainAllListContainer;
