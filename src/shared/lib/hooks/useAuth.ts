import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  return { user, isAuth, isInitialized };
};
