import { FormProvider, useForm } from 'react-hook-form';

import { createProgramsThunk, type IProgramForm } from '@/entities/program';
import { type ICreateFormProps } from '@/shared/constants/types';
import { useAppDispatch } from '@/shared/lib/hooks';
import Button from '@/shared/ui/button';
import FormInput from '@/shared/ui/form-input';
import FormTextArea from '@/shared/ui/form-text-area';

import styles from './styles.module.scss';

export default function GroupCreateForm({
  onCancel,
  onSuccess,
}: ICreateFormProps) {
  const dispatch = useAppDispatch();

  const methods = useForm<IProgramForm>({
    defaultValues: {
      name: '',
      description: '',
      durationHours: '',
      minAge: '',
      maxAge: '',
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: IProgramForm) => {
    try {
      const payload = {
        ...data,
        durationHours: Number(data.durationHours),
        minAge: Number(data.minAge),
        maxAge: Number(data.maxAge),
        isActive: true,
      };
      await dispatch(createProgramsThunk(payload)).unwrap();
      onSuccess();
    } catch (error) {
      console.error('Ошибка при создании программы:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="name"
          name="name"
          label="Название программы"
          inputSize="small"
          placeholder="Введите название программы"
        />
        <FormTextArea
          id="description"
          name="description"
          label="Описание программы"
          placeholder="Введите описание программы"
        />
        <FormInput
          id="minAge"
          name="minAge"
          label="Минимальный возраст"
          inputSize="small"
          placeholder="Введите минимальный возраст"
        />
        <FormInput
          id="maxAge"
          name="maxAge"
          label="Максимальный возраст"
          inputSize="small"
          placeholder="Введите максимальный возраст"
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
