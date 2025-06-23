import ExitIcon from 'public/exit.svg';
import ProfileIcon from 'public/profile.svg';

import { ROUTES } from '@/shared/constants/routes';

import type { IMenuItem } from '../model/types';

export const dropdownMenuItems: IMenuItem[] = [
  {
    label: ROUTES.teacher.name,
    link: ROUTES.teacher.path,
    isAuthOnly: true,
    roles: ROUTES.teacher.roles,
    device: 'mobile',
  },
  {
    label: ROUTES.management.name,
    link: ROUTES.management.path,
    isAuthOnly: true,
    roles: ROUTES.management.roles,
    device: 'mobile',
  },
  {
    label: ROUTES.programs.name,
    link: ROUTES.programs.path,
    device: 'mobile',
  },
  {
    label: ROUTES.employees.name,
    link: ROUTES.employees.path,
    device: 'mobile',
  },
  {
    label: ROUTES.schedule.name,
    link: ROUTES.schedule.path,
    device: 'mobile',
  },
  {
    label: ROUTES.profile.name,
    link: ROUTES.profile.path,
    icon: <ProfileIcon />,
    isAuthOnly: true,
    device: 'all',
  },
  {
    label: 'Выйти',
    actionType: 'logout',
    icon: <ExitIcon />,
    isAuthOnly: true,
    device: 'all',
  },
];
