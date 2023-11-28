import { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const classes = 'card ' + props.className;
  return <StyledCard className={classes}>{props.children}</StyledCard>;
};

export default Card;

//컴포넌트 위치 표시를 위해 일단은 box-shadow를 넣어놨습니다~
const StyledCard = styled.div`
  padding: 1rem;
  margin: 3.5rem auto;
  width: 50%;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;
