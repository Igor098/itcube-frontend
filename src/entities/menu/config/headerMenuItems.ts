import { ROUTES } from '@/shared/constants/routes';

import type { IMenuItem } from '../model/types';

export const headerMenuItems: IMenuItem[] = [
  {
    label: ROUTES.teacher.name,
    link: ROUTES.teacher.path,
    isAuthOnly: true,
    roles: ROUTES.teacher.roles,
    device: 'desktop',
  },
  {
    label: ROUTES.management.name,
    link: ROUTES.management.path,
    isAuthOnly: true,
    roles: ROUTES.management.roles,
    device: 'desktop',
  },
  {
    label: ROUTES.programs.name,
    link: ROUTES.programs.path,
    device: 'desktop',
  },
  {
    label: ROUTES.employees.name,
    link: ROUTES.employees.path,
    device: 'desktop',
  },
  {
    label: ROUTES.schedule.name,
    link: ROUTES.schedule.path,
    device: 'desktop',
  },
  {
    label: ROUTES.login.name,
    link: ROUTES.login.path,
    isGuestOnly: true,
    device: 'desktop',
  },
  {
    label: ROUTES.register.name,
    link: ROUTES.register.path,
    isGuestOnly: true,
    device: 'desktop',
  },
];
