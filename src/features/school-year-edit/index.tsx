import { FormProvider, useForm } from 'react-hook-form';
import { format } from 'date-fns';

import {
  type ISchoolYear,
  type ISchoolYearForm,
  updateSchoolYearThunk,
} from '@/entities/school-year';
import { useAppDispatch } from '@/shared/lib/hooks';
import Button from '@/shared/ui/button';
import FormDatePicker from '@/shared/ui/form-datepicker';
import FormInput from '@/shared/ui/form-input';

import styles from './styles.module.scss';

interface SchoolYearEditFormProps {
  selectedYear: ISchoolYear;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function SchoolYearEditForm({
  onCancel,
  onSuccess,
  selectedYear,
}: SchoolYearEditFormProps) {
  const dispatch = useAppDispatch();
  const methods = useForm<ISchoolYearForm>({
    defaultValues: {
      schoolYearPeriod: selectedYear.period,
      schoolYearStartDate: format(selectedYear.startDate, 'dd.MM.yyyy'),
      schoolYearEndDate: format(selectedYear.endDate, 'dd.MM.yyyy'),
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
      await dispatch(
        updateSchoolYearThunk({ id: selectedYear.id, data: payload }),
      ).unwrap();
      onSuccess();
    } catch (error) {
      console.error('Ошибка при изменении учебного года:', error);
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
