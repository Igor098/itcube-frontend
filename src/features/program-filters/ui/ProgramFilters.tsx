import { type IProgramFilter } from '@/entities/program';
import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input';
import Select, { type IOption } from '@/shared/ui/select';

import styles from './styles.module.scss';

interface IProgramFilterProps {
  values: IProgramFilter;
  search: string;
  setSearch: (q: string) => void;
  setDurationHours: (val: number | undefined) => void;
  onAddClick: () => void;
}

export function ProgramFilters({
  onAddClick,
  search,
  setDurationHours,
  setSearch,
  values,
}: IProgramFilterProps) {
  const statusOptions: IOption<number | undefined>[] = [
    {
      label: 'Все',
      value: undefined,
    },
    {
      label: '136 часов',
      value: 136,
    },
    {
      label: '68 часов',
      value: 68,
    },
    {
      label: '44 часа',
      value: 44,
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
        value={values.durationHours}
        onChange={setDurationHours}
        options={statusOptions}
        selectSize="small"
      />
      <Button onClick={onAddClick} size={'small'}>
        Добавить
      </Button>
    </div>
  );
}
