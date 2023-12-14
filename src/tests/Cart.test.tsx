import { Cart } from '../pages/cart/Cart.page';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// const mockFn = jest.fn(() => console.log('클릭 성공'));
describe('장바구니 테스트', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <Cart />
      </MemoryRouter>,
    );
  });
  test('렌더링 유무 테스트.', () => {
    expect(screen.getByText('예약')).toBeInTheDocument;
  });
});
