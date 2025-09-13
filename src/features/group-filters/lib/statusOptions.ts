import { type IOption } from '@/shared/ui/select';

export const statusOptions: IOption<boolean | undefined>[] = [
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
