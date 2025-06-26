import { FormProvider, useForm } from 'react-hook-form';
import { format, parse } from 'date-fns';

import type { IStudent, IStudentCreate } from '@/entities/student';
import { updateStudentThunk } from '@/entities/student';
import { useAppDispatch } from '@/shared/lib/hooks';
import Button from '@/shared/ui/button';
import FormDatePicker from '@/shared/ui/form-datepicker';
import FormInput from '@/shared/ui/form-input';

import styles from './styles.module.scss';

interface StudentEditFormProps {
  selectedStudent: IStudent;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function GroupCreateForm({
  onCancel,
  onSuccess,
  selectedStudent,
}: StudentEditFormProps) {
  const dispatch = useAppDispatch();

  const methods = useForm<IStudentCreate>({
    defaultValues: {
      fullName: selectedStudent.fullName,
      birthDate: parse(selectedStudent.birthDate, 'dd.MM.yyyy', new Date()),
      hasAccount: selectedStudent.hasAccount,
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
      };
      await dispatch(
        updateStudentThunk({ id: selectedStudent.id, data: payload }),
      ).unwrap();
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
