export type TDeviceType = 'all' | 'mobile' | 'desktop';

export type TUserRole = 'admin' | 'teacher' | 'student';

export type TSize = 'small' | 'large';

export interface IAppRoute {
  path: string;
  name: string;
  isPrivate: boolean;
  roles?: TUserRole[];
}

export interface ICreateFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}
