import { type IGroupFilter } from '@/entities/group';
import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input';
import Select, { type IOption } from '@/shared/ui/select';

import styles from './styles.module.scss';

interface IGroupFilterProps {
  values: IGroupFilter;
  search: string;
  setSearch: (q: string) => void;
  setIsActive: (val: boolean | undefined) => void;
  onAddClick: () => void;
}

export function GroupFilters({
  onAddClick,
  search,
  setIsActive,
  setSearch,
  values,
}: IGroupFilterProps) {
  const statusOptions: IOption<boolean | undefined>[] = [
    {
      label: 'Все',
      value: undefined,
    },
    {
      label: 'Активные',
      value: true,
    },
    {
      label: 'Архивные',
      value: false,
    },
  ];

  return (
    <div className={styles.filters}>
      <Input
        value={search ?? ''}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск..."
        inputSize="small"
      />
      <Select
        value={values.isActive}
        onChange={setIsActive}
        options={statusOptions}
        selectSize="small"
      />
      <Button onClick={onAddClick} size={'small'}>
        Добавить
      </Button>
    </div>
  );
}
