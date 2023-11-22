import MainAllListItem from './mainAllListItem';
import { MainListProps, StyledTitle, StyledWrapper } from './mainListContainer';

const MainAllListContainer = ({ title }: MainListProps) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <MainAllListItem />
    </StyledWrapper>
  );
};

export default MainAllListContainer;
