'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';

interface TabsContentType {
  value: string;
  setValue: (value: string) => void;
}

interface IProps {
  defaultValue: string;
  children: ReactNode;
}

registerLocale('ru', ru);

const TabsContext = createContext<TabsContentType | undefined>(undefined);

export function Tabs({ children, defaultValue }: IProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      {children}
    </TabsContext.Provider>
  );
}

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabsContext использоваться только в \<Tabs\>');
  }
  return context;
};
