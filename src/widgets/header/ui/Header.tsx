import Logo from '@/entities/logo';
import AccountDropdown from '@/features/accountDropdown';

import { HeaderNavigation } from './HeaderNavigation';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo color="normal" />
      <HeaderNavigation />
      <AccountDropdown />
    </header>
  );
}
