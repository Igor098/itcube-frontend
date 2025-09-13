import Button from '@/shared/ui/button';

import styles from './styles.module.scss';

interface ISchoolYearManagementProps {
  onAddClick: () => void;
}

export default function SchoolYearsManagement({
  onAddClick,
}: ISchoolYearManagementProps) {
  return (
    <div className={styles.management}>
      <Button onClick={onAddClick} size={'small'}>
        Добавить учебный год
      </Button>
    </div>
  );
}
