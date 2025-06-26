import { TABS } from '@/shared/constants/tabs';
import Panel from '@/shared/ui/panel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import GroupsTable from '@/widgets/groups';
import ProgramsTable from '@/widgets/programs';
import StudentsTable from '@/widgets/students';

import styles from './styles.module.scss';

export default function Page() {
  return (
    <div className={styles.container}>
      <Tabs defaultValue={'students'}>
        <Panel className={styles.tabs}>
          <TabsList>
            {TABS.map((tab, idx) => (
              <TabsTrigger key={idx} icon={tab.icon} value={tab.value}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Panel>
        <Panel className={styles.content}>
          <TabsContent value={'students'}>
            <StudentsTable />
          </TabsContent>
          <TabsContent value={'groups'}>
            <GroupsTable />
          </TabsContent>
          <TabsContent value={'programs'}>
            <ProgramsTable />
          </TabsContent>
          <TabsContent value={'employees'}>
            <h1>Сотрудники</h1>
          </TabsContent>
        </Panel>
      </Tabs>
    </div>
  );
}
