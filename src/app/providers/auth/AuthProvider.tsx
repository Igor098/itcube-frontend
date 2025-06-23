'use client';

import { type ReactNode, useEffect } from 'react';

import { checkAuthThunk } from '@/features/auth';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Loader } from '@/shared/ui/loader';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { isInitialized } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  if (!isInitialized) {
    return <Loader />;
  }

  return children;
};
