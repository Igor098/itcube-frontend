import { PRIVATE_ROUTES } from '@/shared/constants/routes';

export const isMatchRoute = (url: string) => {
  for (const route of PRIVATE_ROUTES) {
    if (url.includes(route)) {
      return true;
    }
  }
  return false;
};
