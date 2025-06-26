import { FormProvider, useForm } from 'react-hook-form';

import {
  type IProgram,
  type IProgramCreate,
  updateProgramsThunk,
} from '@/entities/program';
import { useAppDispatch } from '@/shared/lib/hooks';
import Button from '@/shared/ui/button';
import FormInput from '@/shared/ui/form-input';
import FormTextArea from '@/shared/ui/form-text-area';

import styles from './styles.module.scss';

interface ProgramEditFormProps {
  selectedProgram: IProgram;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function GroupCreateForm({
  onCancel,
  onSuccess,
  selectedProgram,
}: ProgramEditFormProps) {
  const dispatch = useAppDispatch();

  const methods = useForm<IProgramCreate>({
    defaultValues: {
      name: selectedProgram.name,
      description: selectedProgram.description,
      durationHours: selectedProgram.durationHours,
      minAge: selectedProgram.minAge,
      maxAge: selectedProgram.maxAge,
      isActive: selectedProgram.isActive,
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: IProgramCreate) => {
    try {
      const payload = {
        ...data,
        durationHours: Number(data.durationHours),
        minAge: Number(data.minAge),
        maxAge: Number(data.maxAge),
        isActive: data.isActive,
      };
      await dispatch(
        updateProgramsThunk({ id: selectedProgram.id, data: payload }),
      ).unwrap();
      onSuccess();
    } catch (error) {
      console.error('Ошибка при изменении программы:', error);
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
          cols={6}
          placeholder="Введите описание программы"
        />
        <div className={styles.ages}>
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
        </div>
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
