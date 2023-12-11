jest.mock('../styles/theme', () => ({
  theme: {
    colors: {
      navy: '#253C59',
      blue: '#58788c',
      yellow: '#D9B70D',
      gray1: '#f8f8f8',
      gray2: '#AFAFAF',
      gray3: '#757575',
      error: '#CF0000',
      success: '#008000',
    },
    fonts: {
      subtitle1: {
        fontSize: '2.5rem',
        fontWeight: '900',
        lineHeight: '1.5',
      },
      subtitle2: {
        fontSize: '2rem',
        fontWeight: '700',
        lineHeight: '1.5',
      },
      subtitle3: {
        fontSize: '1.75rem',
        fontWeight: '600',
        lineHeight: '1.5',
      },
      subtitle4: {
        fontSize: '1.5rem',
        fontWeight: '500',
        lineHeight: '1.5',
      },
      subtitle4_5: {
        fontSize: '1.25rem',
        fontWeight: '700',
        lineHeight: '1.5',
      },
      subtitle5: {
        fontSize: '1rem',
        fontWeight: '700',
        lineHeight: '1.5',
      },
      body: {
        fontSize: '0.875rem',
        fontWeight: '700',
        lineHeight: '1.6',
      },
    },
    shadows: {
      shadow1: {
        shadow: '0px 4px 8px rgba(0, 0, 0, 0.04)',
      },
      shadow2: {
        shadow: '0px 8px 16px rgba(0, 0, 0, 0.16)',
      },
      shadow3: {
        shadow: '0px 12px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}));

import { Cart } from '../pages/cart/Cart.page';
import { fireEvent, render } from '@testing-library/react';

const mockFn = jest.fn(() => console.log('클릭 성공'));
describe('장바구니 삭제 테스트', () => {
  test('장바구니 버튼을 누르면 반응한다.', () => {
    const { getByTestId } = render(<Cart />);
    const deleteBtn = getByTestId('deleteTrashCan');
    fireEvent.click(deleteBtn);
    expect(mockFn).toBeCalled;
  });
  test('장바구니 버튼을 누르면 delete api를 호출한다', () => {});
  test('장바구니 버튼을 누른 후 삭제가 됐을 때 alert 창이 뜬다', () => {});
});
