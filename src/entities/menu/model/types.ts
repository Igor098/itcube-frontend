import type { ReactNode } from 'react';

import type { TDeviceType, TUserRole } from '@/shared/constants/types';

export interface IMenuItem {
  label: string;
  link?: string;
  actionType?: string;
  isAuthOnly?: boolean;
  isGuestOnly?: boolean;
  icon?: ReactNode;
  roles?: TUserRole[];
  device?: TDeviceType;
}
