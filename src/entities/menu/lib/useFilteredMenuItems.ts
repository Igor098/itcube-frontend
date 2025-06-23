import { useAuth } from '@/shared/lib/hooks/useAuth';

import type { IMenuItem } from '../model/types';

interface Options {
  device?: 'desktop' | 'mobile' | 'all';
}

export const useFilteredMenuItems = (
  items: IMenuItem[],
  options?: Options,
): IMenuItem[] => {
  const { isAuth, user } = useAuth();

  return items.filter((item) => {
    if (!item.link && !item.actionType) return false;
    if (item.isGuestOnly && isAuth) return false;
    if (item.isAuthOnly && !isAuth) return false;
    if (item.roles && !item.roles.some((role) => user?.roles.includes(role)))
      return false;

    if (options?.device) {
      if (!item.device || item.device === 'all') return true;
      return item.device === options.device;
    }

    return true;
  });
};
