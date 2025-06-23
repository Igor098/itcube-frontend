import { type TUserRole } from '@/shared/constants/types';

export interface IUser {
  id: number;
  email: string;
  username: string;
  method: 'credentials' | 'google' | 'yandex';
  isVerified: boolean;
  isTwoFactorEnabled: boolean;
  roles: TUserRole[];
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthSlice {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
}
