'use client';

import { useEffect, useRef, useState } from 'react';

import { dropdownMenuItems, useFilteredMenuItems } from '@/entities/menu';
import { UserAvatar } from '@/entities/user';
import { logoutThunk } from '@/features/auth';
import { roles } from '@/shared/constants/roles';
import { useAppDispatch } from '@/shared/lib/hooks';
import { useAuth } from '@/shared/lib/hooks/useAuth';
import { useIsMobile } from '@/shared/lib/platform/useIsMobile';
import { DropdownItem } from '@/shared/ui/dropdownItem';

import styles from './styles.module.scss';

export default function AccountDropdown() {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAuth();
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const userRoles = user?.roles.map((role) => roles[role].name).join(', ');

  const visibleItems = useFilteredMenuItems(dropdownMenuItems, {
    device: isMobile ? 'mobile' : 'desktop',
  });

  const handleAction = (actionType?: string) => {
    if (actionType === 'logout') {
      dispatch(logoutThunk());
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return isAuth ? (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button className={styles.trigger} onClick={toggleDropdown}>
        <UserAvatar username={user?.username} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.header}>
            <h3 className={styles.username}>{user?.username}</h3>
            <span className={styles.roles}>{userRoles}</span>
          </div>
          {visibleItems.map((item, index) => (
            <DropdownItem
              label={item.label}
              link={item.link}
              onClick={
                item.actionType
                  ? () => handleAction(item.actionType)
                  : undefined
              }
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  ) : null;
}
