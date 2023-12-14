import { Cart } from '../pages/cart/Cart.page';
import { screen, render } from '@testing-library/react';

describe('장바구니 삭제 테스트', () => {
  beforeEach(() => {
    render(<Cart />);
  });
  test('렌더링 유무 테스트.', () => {
    expect(screen.getByText('예약')).toBeInTheDocument;
  });
  test('장바구니 버튼을 누르면 delete api를 호출한다', () => {});
  test('장바구니 버튼을 누른 후 삭제가 됐을 때 alert 창이 뜬다', () => {});
});
