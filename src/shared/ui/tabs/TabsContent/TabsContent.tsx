'use client';

import { type ReactNode } from 'react';
import { clsx } from 'clsx';

import { useTabsContext } from '@/shared/ui/tabs/Tabs';

import styles from './styles.module.scss';

type TabsContentProps = {
  value: string;
  children: ReactNode;
  className?: string;
  keepMounted?: boolean;
  id?: string;
};

export function TabsContent({
  children,
  className,
  id,
  keepMounted = false,
  value,
}: TabsContentProps) {
  const { groupId, value: active } = useTabsContext();
  const isActive = active == value;

  if (!keepMounted) {
    return isActive ? (
      <div
        className={clsx(styles.tab_content, className)}
        role="tabpanel"
        id={`${groupId}-panel-${value}`}
        aria-labelledby={`${groupId}-tab-${value}`}
        hidden={!isActive}
        aria-hidden={!isActive}
      >
        {children}
      </div>
    ) : null;
  }

  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={id ? `${id}-tab` : undefined}
      hidden={!isActive}
      aria-hidden={!isActive}
      className={clsx(
        styles.tab_content,
        className,
        !isActive && styles.hidden,
      )}
    >
      {children}
    </div>
  );
}
