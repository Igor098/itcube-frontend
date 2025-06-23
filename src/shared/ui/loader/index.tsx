import styles from './styles.module.scss'; // стили ниже

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader} />
    </div>
  );
};
