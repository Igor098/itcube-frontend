import { getInitialFromName } from '@/shared/lib/helpers/getInitialFromName';

import styles from './styles.module.scss';

interface IUserAvatarProps {
  username?: string;
}

export function UserAvatar({ username }: IUserAvatarProps) {
  const letter = getInitialFromName(username);
  return <div className={styles.avatar}>{letter}</div>;
}
