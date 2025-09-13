import { TABS } from '@/shared/constants/tabs';
import Panel from '@/shared/ui/panel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import GroupsTable from '@/widgets/groups';
import ProgramsTable from '@/widgets/programs';
import StudentsTable from '@/widgets/students';

import styles from './styles.module.scss';
import { SchoolYearsTable } from '@/widgets/school-years';

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
          <TabsContent value={'groups'} id="groups">
            <GroupsTable />
          </TabsContent>
          <TabsContent value={'schedules'} id="schedules">
            <h1>Занятия</h1>
          </TabsContent>
          <TabsContent value={'programs'} id="programs">
            <ProgramsTable />
          </TabsContent>
          <TabsContent value={'groupStudents'} id="groupStudents">
            <h1>Ученики в группах</h1>
          </TabsContent>
          <TabsContent value={'employees'} id="employees">
            <h1>Сотрудники</h1>
          </TabsContent>
          <TabsContent value={'educationYears'} id="educationYears">
            <SchoolYearsTable />
          </TabsContent>
          <TabsContent value={'students'} id="students">
            <StudentsTable />
          </TabsContent>
        </Panel>
      </Tabs>
    </div>
  );
}
