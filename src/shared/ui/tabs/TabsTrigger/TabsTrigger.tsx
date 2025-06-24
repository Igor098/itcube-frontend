'use client';

import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import { useTabsContext } from '@/shared/ui/tabs/Tabs';

import styles from './styles.module.scss';

interface ITabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function TabsTrigger({
  children,
  className,
  icon,
  value,
}: ITabsTriggerProps) {
  const { setValue, value: active } = useTabsContext();

  return (
    <button
      onClick={() => setValue(value)}
      className={clsx(
        styles.trigger,
        className,
        active === value && styles.active,
      )}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
