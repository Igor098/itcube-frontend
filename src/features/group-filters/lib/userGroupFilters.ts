import { useMemo, useState } from 'react';

import { type IGroupFilter } from '@/entities/group';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export const useGroupFilters = () => {
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search, 300);

  const values = useMemo(() => {
    const filters: IGroupFilter = {};
    if (debouncedSearch) {
      filters.q = debouncedSearch;
    }
    if (typeof isActive === 'boolean') {
      filters.isActive = isActive;
    }
    return filters;
  }, [isActive, debouncedSearch]);

  return {
    setIsActive,
    setSearch,
    search,
    values,
  };
};
