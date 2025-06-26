'use client';

import { useEffect, useState } from 'react';

import {
  deleteProgramsThunk,
  getAllProgramsThunk,
  type IProgram,
} from '@/entities/program';
import { DataTable, type IColumn } from '@/entities/table';
import ProgramCreateForm from '@/features/program-create';
import ProgramEditForm from '@/features/program-edit';
import { ProgramFilters, useProgramFilters } from '@/features/program-filters';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import EntityDeleteModal from '@/shared/ui/entity-delete-modal';
import Modal from '@/shared/ui/modal';

export default function ProgramsTable() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.programs);
  const { search, setDurationHours, setSearch, values } = useProgramFilters();
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(
    null,
  );
  const [selectedProgram, setSelectedProgram] = useState<IProgram | null>(null);

  const handleCloseModal = () => {
    setModalMode(null);
    setDurationHours(undefined);
  };

  const handleCreateSuccess = async () => {
    handleCloseModal();
    await dispatch(getAllProgramsThunk(values)).unwrap();
  };

  const handleDeleteSuccess = async () => {
    if (!selectedProgram) return;
    try {
      handleCloseModal();
      await dispatch(deleteProgramsThunk(Number(selectedProgram.id))).unwrap();
      await dispatch(getAllProgramsThunk(values)).unwrap();
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const handleAdd = () => {
    setSelectedProgram(null);
    setModalMode('add');
  };

  const handleEdit = (program: IProgram) => {
    setSelectedProgram(program);
    setModalMode('edit');
  };

  const handleDelete = (program: IProgram) => {
    setSelectedProgram(program);
    setModalMode('delete');
  };

  const columns: IColumn<IProgram>[] = [
    {
      title: 'Название',
      key: 'name',
    },
    {
      title: 'Описание',
      key: 'description',
    },
    {
      title: 'Длительность',
      key: 'durationHours',
    },
    {
      title: 'Мин. возраст',
      key: 'minAge',
    },
    {
      title: 'Макс. возраст',
      key: 'maxAge',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (row) => (
        <>
          <button onClick={() => handleEdit(row)}>✏️</button>
          <button onClick={() => handleDelete(row)}>🗑️</button>
        </>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAllProgramsThunk(values));
  }, [dispatch, values]);

  return (
    <>
      {modalMode === 'add' && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title="Добавление программы"
        >
          <ProgramCreateForm
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'edit' && selectedProgram && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title={`Редактирование программы`}
        >
          <ProgramEditForm
            selectedProgram={selectedProgram}
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'delete' && selectedProgram && (
        <EntityDeleteModal
          isOpen={modalMode === 'delete'}
          onCancel={handleCloseModal}
          entityName="программу"
          onConfirm={handleDeleteSuccess}
          entityLabel={`${selectedProgram.name}`}
        />
      )}
      <ProgramFilters
        onAddClick={() => handleAdd()}
        search={search}
        values={values}
        setDurationHours={setDurationHours}
        setSearch={setSearch}
      />
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <DataTable columns={columns} data={data} rowKey={(row) => row.id} />
      )}
    </>
  );
}
