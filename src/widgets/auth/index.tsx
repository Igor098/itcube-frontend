import { type ReactNode } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

interface IProps {
  isRegister?: boolean;
  children: ReactNode;
}

export default function AuthLayout({ children, isRegister }: IProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image src="/preview.png" alt="Логотип" width={520} height={346} />
        <h1 className={styles.title}>
          <span>IT-Куб</span>
          {isRegister && <span>Добро пожаловать!</span>}
          {!isRegister && <span>С возвращением!</span>}
        </h1>
      </div>
      {children}
    </section>
  );
}
