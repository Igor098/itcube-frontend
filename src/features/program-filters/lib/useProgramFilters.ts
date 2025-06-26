import { useMemo, useState } from 'react';

import { type IProgramFilter } from '@/entities/program';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export const useProgramFilters = () => {
  const [durationHours, setDurationHours] = useState<number | undefined>(
    undefined,
  );
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search, 300);

  const values = useMemo(() => {
    const filters: IProgramFilter = {};
    if (debouncedSearch) {
      filters.q = debouncedSearch;
    }
    if (typeof durationHours === 'number') {
      filters.durationHours = durationHours;
    }
    return filters;
  }, [durationHours, debouncedSearch]);

  return {
    setDurationHours,
    setSearch,
    search,
    values,
  };
};
