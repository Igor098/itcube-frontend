import GroupIcon from 'public/icons/people.svg';
import ScheduleIcon from 'public/icons/schedule.svg';
import ProgramIcon from 'public/icons/books.svg';
import GroupStudentIcon from 'public/icons/diploma.svg';
import EmployeeIcon from '/public/icons/employee.svg';
import EducationYearIcon from '/public/icons/calendar.svg';
import StudentIcon from '/public/icons/group.svg';
import { type ReactNode } from 'react';

interface ITabItem {
  name: string;
  value: string;
  icon?: ReactNode;
}

export const TABS: ITabItem[] = [
  {
    name: 'Группы',
    value: 'groups',
    icon: <GroupIcon />,
  },
  {
    name: 'Занятия',
    value: 'schedules',
    icon: <ScheduleIcon />,
  },
  {
    name: 'Программы',
    value: 'programs',
    icon: <ProgramIcon />,
  },
  {
    name: 'Ученики в группах',
    value: 'groupStudents',
    icon: <GroupStudentIcon />,
  },
  {
    name: 'Сотрудники',
    value: 'employees',
    icon: <EmployeeIcon />,
  },
  {
    name: 'Учебные года',
    value: 'educationYears',
    icon: <EducationYearIcon />,
  },
  {
    name: 'Ученики',
    value: 'students',
    icon: <StudentIcon />,
  },
];
