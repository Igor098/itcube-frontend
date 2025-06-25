import { useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { createGroupThunk } from '@/entities/group';
import { type IGroupForm } from '@/entities/group';
import { getAllProgramsThunk } from '@/entities/program';
import { getAllSchoolYearsThunk } from '@/entities/school-year';
import { getAllTeachersThunk } from '@/entities/teacher';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import Button from '@/shared/ui/button';
import FormInput from '@/shared/ui/form-input';
import FormSelect from '@/shared/ui/form-select';

import styles from './styles.module.scss';

interface GroupCreateFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export function GroupCreateForm({ onCancel, onSuccess }: GroupCreateFormProps) {
  const dispatch = useAppDispatch();
  const { data: teachers } = useAppSelector((state) => state.teacherDetails);
  const { data: schoolYears } = useAppSelector((state) => state.schoolYears);
  const { data: programs } = useAppSelector((state) => state.programs);

  const methods = useForm<IGroupForm>({
    defaultValues: {
      name: '',
      teacherId: '',
      programId: '',
      schoolYearId: '',
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  useEffect(() => {
    dispatch(getAllTeachersThunk());
    dispatch(getAllSchoolYearsThunk());
    dispatch(getAllProgramsThunk());
  }, [dispatch]);

  const teachersOptions = useMemo(
    () =>
      teachers.map((teacher) => ({
        label: teacher.employee.fullName,
        value: String(teacher.id),
      })),
    [teachers],
  );

  const yearsOptions = useMemo(
    () =>
      schoolYears.map((year) => ({
        label: year.period,
        value: String(year.id),
      })),
    [schoolYears],
  );

  const programsOptions = useMemo(
    () =>
      programs.map((program) => ({
        label: program.name,
        value: String(program.id),
      })),
    [programs],
  );

  console.log(teachers);

  const onSubmit = async (data: IGroupForm) => {
    try {
      const payload = {
        ...data,
        teacherId: Number(data.teacherId),
        schoolYearId: Number(data.schoolYearId),
        programId: Number(data.programId),
      };
      await dispatch(createGroupThunk(payload)).unwrap();
      onSuccess();
    } catch (error) {
      console.error('Ошибка при создании группы:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="groupName"
          name="name"
          label="Название группы"
          inputSize="small"
          placeholder="Выберите группу"
        />
        <FormSelect
          placeholder="-- Не выбрано --"
          selectSize="small"
          name="teacherId"
          label="Преподаватель"
          options={teachersOptions}
        />
        <FormSelect
          placeholder="-- Не выбрано --"
          selectSize="small"
          name="schoolYearId"
          label="Учебный год"
          options={yearsOptions}
        />
        <FormSelect
          placeholder="-- Не выбрано --"
          selectSize="small"
          name="programId"
          label="Программа"
          options={programsOptions}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <Button type="submit" size="small">
            Сохранить
          </Button>
          <Button
            type="button"
            size="small"
            colorType="secondary"
            onClick={onCancel}
          >
            Отмена
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
