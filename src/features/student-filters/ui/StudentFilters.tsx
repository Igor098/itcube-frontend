import { type IStudentFilter } from '@/entities/student';
import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input';
import Select, { type IOption } from '@/shared/ui/select';

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
  const statusOptions: IOption<number | undefined>[] = [
    {
      label: 'Все',
      value: undefined,
    },
    {
      label: '5 лет',
      value: 5,
    },
    {
      label: '6 лет',
      value: 6,
    },
    {
      label: '7 лет',
      value: 7,
    },
    {
      label: '8 лет',
      value: 8,
    },
    {
      label: '9 лет',
      value: 9,
    },
    {
      label: '10 лет',
      value: 10,
    },
    {
      label: '11 лет',
      value: 11,
    },
    {
      label: '12 лет',
      value: 12,
    },
    {
      label: '13 лет',
      value: 13,
    },
    {
      label: '14 лет',
      value: 14,
    },
    {
      label: '15 лет',
      value: 15,
    },
    {
      label: '16 лет',
      value: 16,
    },
    {
      label: '17 лет',
      value: 17,
    },
    {
      label: '18 лет',
      value: 18,
    },
  ];

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
