'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { headerMenuItems, useFilteredMenuItems } from '@/entities/menu';
import { useIsMobile } from '@/shared/lib/platform/useIsMobile';

import styles from './styles.module.scss';

export function HeaderNavigation() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const filteredItems = useFilteredMenuItems(headerMenuItems, {
    device: isMobile ? 'mobile' : 'desktop',
  });

  return (
    <nav className={styles.nav}>
      {filteredItems.map((item) => (
        <Link
          href={item.link!}
          key={item.label}
          className={clsx(
            styles.link,
            pathname.startsWith(item.link!) ? styles.active : '',
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
