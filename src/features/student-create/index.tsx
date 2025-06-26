import { FormProvider, useForm } from 'react-hook-form';
import { format } from 'date-fns';

import {
  createStudentThunk,
  type IStudentCreate,
  type IStudentForm,
} from '@/entities/student';
import { type ICreateFormProps } from '@/shared/constants/types';
import { useAppDispatch } from '@/shared/lib/hooks';
import Button from '@/shared/ui/button';
import FormDatePicker from '@/shared/ui/form-datepicker';
import FormInput from '@/shared/ui/form-input';

import styles from './styles.module.scss';

export default function GroupCreateForm({
  onCancel,
  onSuccess,
}: ICreateFormProps) {
  const dispatch = useAppDispatch();

  const methods = useForm<IStudentForm>({
    defaultValues: {
      fullName: '',
      birthDate: '',
      hasAccount: false,
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: IStudentCreate) => {
    try {
      const payload = {
        ...data,
        birthDate: format(data.birthDate, 'dd.MM.yyyy'),
        hasAccount: false,
      };
      await dispatch(createStudentThunk(payload)).unwrap();
      onSuccess();
    } catch (error) {
      console.error('Ошибка при изменении ученика:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="fullName"
          name="fullName"
          label="ФИО ученика"
          inputSize="small"
          placeholder="Введите ФИО ученика"
        />
        <FormDatePicker
          name="birthDate"
          label="Дата рождения"
          placeholder="Введите дату"
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}

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
