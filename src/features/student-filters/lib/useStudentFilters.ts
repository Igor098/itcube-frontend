import { useMemo, useState } from 'react';

import { type IStudentFilter } from '@/entities/student';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export const useStudentFilters = () => {
  const [age, setAge] = useState<number | undefined>(undefined);
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search, 300);

  const values = useMemo(() => {
    const filters: IStudentFilter = {};
    if (debouncedSearch) {
      filters.q = debouncedSearch;
    }
    if (typeof age === 'number') {
      filters.age = age;
    }
    return filters;
  }, [age, debouncedSearch]);

  return {
    setAge,
    setSearch,
    search,
    values,
  };
};
