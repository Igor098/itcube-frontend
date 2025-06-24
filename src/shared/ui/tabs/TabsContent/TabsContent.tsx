'use client';

import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import { useTabsContext } from '@/shared/ui/tabs/Tabs';

import styles from './styles.module.scss';

interface ITabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsContent({ children, className, value }: ITabsContentProps) {
  const { value: active } = useTabsContext();
  return active === value ? (
    <div className={clsx(styles.tab_content, className)}>{children}</div>
  ) : null;
}
