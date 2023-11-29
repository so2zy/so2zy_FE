import MainAllListItem from './mainAllListItem';
import { StyledTitle, StyledWrapper } from './mainListContainer';
import { MainListProps } from './mainListItem';

const MainAllListContainer = ({ title }: MainListProps) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <MainAllListItem title={title} />
    </StyledWrapper>
  );
};

export default MainAllListContainer;
