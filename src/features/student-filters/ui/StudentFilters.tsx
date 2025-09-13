import { type IStudentFilter } from '@/entities/student';
import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input';
import Select from '@/shared/ui/select';

import { statusOptions } from '../lib/statusOptions';

import styles from './styles.module.scss';

interface IStudentFilterProps {
  values: IStudentFilter;
  search: string;
  setSearch: (q: string) => void;
  setAge: (val: number | undefined) => void;
  onAddClick: () => void;
}

export function StudentFilters({
  onAddClick,
  search,
  setAge,
  setSearch,
  values,
}: IStudentFilterProps) {
  return (
    <div className={styles.filters}>
      <Input
        className={styles.input}
        value={search ?? ''}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск..."
        inputSize="small"
      />
      <Select
        value={values.age}
        onChange={setAge}
        options={statusOptions}
        selectSize="small"
      />
      <Button onClick={onAddClick} size={'small'}>
        Добавить
      </Button>
    </div>
  );
}
