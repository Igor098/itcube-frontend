import { type IAppRoute } from '@/shared/constants/types';

export const ROUTES = {
  home: {
    path: '/',
    name: 'Главная',
    isPrivate: false,
  },
  login: {
    path: '/login',
    name: 'Вход',
    isPrivate: false,
  },
  register: {
    path: '/register',
    name: 'Регистрация',
    isPrivate: false,
  },
  management: {
    path: '/management',
    name: 'Управление',
    isPrivate: true,
    roles: ['admin'],
  },
  teacher: {
    path: '/teacher',
    name: 'Кабинет педагога',
    isPrivate: true,
    roles: ['teacher'],
  },
  profile: {
    path: '/profile',
    name: 'Профиль',
    isPrivate: true,
  },
  programs: {
    path: '/programs',
    name: 'Направления',
    isPrivate: false,
  },
  employees: {
    path: '/employees',
    name: 'Сотрудники',
    isPrivate: false,
  },
  schedule: {
    path: '/schedule',
    name: 'Расписание',
    isPrivate: false,
  },
} as const satisfies Record<string, IAppRoute>;

export const PRIVATE_ROUTES: string[] = Object.values(ROUTES)
  .filter((route) => route.isPrivate)
  .map((route) => route.path);
