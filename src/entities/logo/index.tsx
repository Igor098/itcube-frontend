import { clsx } from 'clsx';
import Link from 'next/link';
import LogoIcon from 'public/logo.svg';
import WhiteLogoIcon from 'public/white-logo.svg';

import { ROUTES } from '@/shared/constants/routes';

import styles from './styles.module.scss';

type LogoColor = 'normal' | 'white';

interface IProps {
  color: LogoColor;
}

export default function Logo({ color }: IProps) {
  return (
    <Link href={ROUTES.home.path}>
      <div className={styles.logo_wrapper}>
        {color === 'white' && <WhiteLogoIcon />}
        {color === 'normal' && <LogoIcon />}
        <span className={clsx(styles.text, styles[`text_color__${color}`])}>
          Центр цифрового образования детей «IT-Куб.Семенов»
        </span>
      </div>
    </Link>
  );
}
