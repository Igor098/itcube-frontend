'use client';

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react';
import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';

type TabsContextValue = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  groupId: string;
};

type TabsProps = {
  defaultValue: string;
  groupId?: string;
  children: ReactNode;
};

registerLocale('ru', ru);

const TabsContext = createContext<TabsContextValue | undefined>(undefined);
TabsContext.displayName = 'TabsContext';

export function Tabs({ children, defaultValue, groupId }: TabsProps) {
  const generatedId = useId();
  const [value, setValue] = useState(defaultValue);

  const gid = groupId ?? `tabs-${generatedId}`;
  const ctx = useMemo(() => ({ value, setValue, groupId: gid }), [gid, value]);
  return <TabsContext.Provider value={ctx}>{children}</TabsContext.Provider>;
}

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabsContext может использоваться только в \<Tabs\>');
  }
  return context;
};
