import { type IOption } from '@/shared/ui/select';

export const statusOptions: IOption<number | undefined>[] = [
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
