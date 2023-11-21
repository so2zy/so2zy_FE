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

const StyledCard = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);

  padding: 3px;
  margin: 2rem auto;
  width: 50%;
  max-width: 100%;
  flex-direction: column;
`;
