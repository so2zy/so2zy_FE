import { atom, selector } from 'recoil';
export interface CommonData {
  email: string;
  password: string;
  token?: string;
  userName?: string;
}
export const emailState = atom<string>({
  key: 'emailState',
  default: '',
});

export const pwState = atom<string>({
  key: 'pwState',
  default: '',
});

export const userNameState = atom<string>({
  key: 'userNameState',
  default: '',
});

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});
export const tokenAtom = atom({
  key: 'tokenAtom',
  default: '',
});
export const refreshTokenAtom = atom({
  key: 'refreshTokenAtom',
  default: '',
});

export const isLogInSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(tokenAtom),
});

export const userKeyState = atom({
  key: 'userKeyState',
  default: '',
});

export const iatDatePlus9HoursState = atom({
  key: 'iatDatePlus9HoursState',
  default: 0,
});
