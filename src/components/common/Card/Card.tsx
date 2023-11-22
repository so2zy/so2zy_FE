import { theme } from '@styles/theme';
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
  border: 0.5px solid ${theme.colors.gray2};
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${theme.colors.gray2};

  padding: 1rem 4rem;
  margin: 2rem auto;
  width: 50%;
  flex-direction: column;

  // @media (max-width: 768px) {
  //   width: 70%;
  // }

  // @media (max-width: 480px) {
  //   width: 90%;
  // }
`;
