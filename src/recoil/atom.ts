import { atom } from 'recoil';
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
