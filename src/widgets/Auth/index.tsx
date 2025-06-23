import Image from 'next/image';

import { LoginForm } from '@/features/auth/login';

import styles from './styles.module.scss';

export default function AuthWidget() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image src="/preview.png" alt="Логотип" width={520} height={346} />
        <h1 className={styles.title}>
          <span>IT-Куб</span>
          <span>С возвращением!</span>
        </h1>
      </div>
      <LoginForm />
    </section>
  );
}
