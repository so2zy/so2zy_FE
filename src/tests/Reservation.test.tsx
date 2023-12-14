import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Reservation } from './../pages/reservation/Reservation.page';

describe('Reservation Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/reservation']}>
        <Reservation />
      </MemoryRouter>,
    );
  });

  it('render', () => {
    expect(
      screen.getByText('※ 이용규칙, 취소 및 환불 규칙'),
    ).toBeInTheDocument();
  });
});
