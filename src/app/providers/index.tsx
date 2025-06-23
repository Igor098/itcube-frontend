'use client';

import { type ReactNode, useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { checkAuthThunk } from '@/features/auth';

import { store } from './store';

interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  useEffect(() => {
    store.dispatch(checkAuthThunk());
  }, []);
  return <StoreProvider store={store}>{children}</StoreProvider>;
}
