import Logo from '@/entities/logo';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Logo color="white" />
        <div className={styles.social}>
          <div className={styles.social_links}>
            <span>Иконка</span>
            <span>Иконка</span>
          </div>
          <span>Юридическая информация</span>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.site}>Сайт «IT-Куб.Семенов»</p>
        <div className={styles.copyright}>
          <span>ЦЦОД «IT-Куб». Все права защищены © 2025</span>
          <span>Разработано @GreatDragonX</span>
        </div>
      </div>
    </footer>
  );
}
