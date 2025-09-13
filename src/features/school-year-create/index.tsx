import { FormProvider, useForm } from 'react-hook-form';
import { format } from 'date-fns';

import {
  type ISchoolYearCreate,
  type ISchoolYearForm,
} from '@/entities/school-year';
import { createSchoolYearThunk } from '@/entities/school-year';
import type { ICreateFormProps } from '@/shared/constants/types';
import { useAppDispatch } from '@/shared/lib/hooks';
import Button from '@/shared/ui/button';
import FormDatePicker from '@/shared/ui/form-datepicker';
import FormInput from '@/shared/ui/form-input';

import styles from './styles.module.scss';

export default function SchoolYearCreateForm({
  onCancel,
  onSuccess,
}: ICreateFormProps) {
  const dispatch = useAppDispatch();
  const methods = useForm<ISchoolYearForm>({
    defaultValues: {
      schoolYearPeriod: '',
      schoolYearStartDate: '',
      schoolYearEndDate: '',
    },
  });

  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: ISchoolYearForm): Promise<void> => {
    try {
      const payload = {
        period: data.schoolYearPeriod,
        startDate: format(data.schoolYearStartDate, 'dd.MM.yyyy'),
        endDate: format(data.schoolYearEndDate, 'dd.MM.yyyy'),
      };
      await dispatch(createSchoolYearThunk(payload)).unwrap();
      onSuccess();
    } catch (error) {
      console.error('Ошибка при создании учебного года:', error);
    }
  };
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="schoolYearPeriod"
          name="schoolYearPeriod"
          label="Период учебного года"
          inputSize="small"
          placeholder="Введите период"
        />
        {errors.schoolYearPeriod && <p>{errors.schoolYearPeriod.message}</p>}
        <FormDatePicker
          name="schoolYearStartDate"
          label="Дата начала"
          placeholder="Введите дату"
        />
        {errors.schoolYearStartDate && (
          <p>{errors.schoolYearStartDate.message}</p>
        )}
        <FormDatePicker
          name="schoolYearEndDate"
          label="Дата окончания"
          placeholder="Введите дату"
        />
        {errors.schoolYearEndDate && <p>{errors.schoolYearEndDate.message}</p>}
        <div className={styles.button_wrapper}>
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
