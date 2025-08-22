import { TABS } from '@/shared/constants/tabs';
import Panel from '@/shared/ui/panel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import GroupsTable from '@/widgets/groups';
import ProgramsTable from '@/widgets/programs';
import StudentsTable from '@/widgets/students';

import styles from './styles.module.scss';

export default function Page() {
  const GROUP_ID = 'management';

  return (
    <div className={styles.container}>
      <Tabs defaultValue={'students'} groupId={`tab-${GROUP_ID}`}>
        <Panel className={styles.tabs}>
          <TabsList aria-label="Управление" orientation="vertical">
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} icon={tab.icon} value={tab.value}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Panel>
        <Panel className={styles.content}>
          <TabsContent value={'students'} id="students">
            <StudentsTable />
          </TabsContent>
          <TabsContent value={'groups'} id="groups">
            <GroupsTable />
          </TabsContent>
          <TabsContent value={'programs'} id="programs">
            <ProgramsTable />
          </TabsContent>
          <TabsContent value={'employees'} id="employees">
            <h1>Сотрудники</h1>
          </TabsContent>
        </Panel>
      </Tabs>
    </div>
  );
}
