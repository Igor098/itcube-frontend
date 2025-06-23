export type TDeviceType = 'all' | 'mobile' | 'desktop';

export type TUserRole = 'admin' | 'teacher' | 'student';

export interface IAppRoute {
  path: string;
  name: string;
  isPrivate: boolean;
  roles?: TUserRole[];
}
