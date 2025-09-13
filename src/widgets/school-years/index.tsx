'use client';

import { useEffect, useState } from 'react';

import {
  deleteSchoolYearThunk,
  getAllSchoolYearsThunk,
  type ISchoolYear,
  selectSchoolYear,
} from '@/entities/school-year';
import { DataTable, type IColumn } from '@/entities/table';
import SchoolYearCreateForm from '@/features/school-year-create';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import Modal from '@/shared/ui/modal';
import SchoolYearsManagement from '@/features/school-year-management';
import ProgramEditForm from '@/features/program-edit';
import SchoolYearEditForm from '@/features/school-year-edit';
import EntityDeleteModal from '@/shared/ui/entity-delete-modal';

export function SchoolYearsTable() {
  const { data, isLoading } = useAppSelector(selectSchoolYear);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(
    null,
  );
  const [selectedSchoolYear, setSelectedSchoolYear] =
    useState<ISchoolYear | null>(null);

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setModalMode(null);
  };

  const handleCreateSuccess = async () => {
    handleCloseModal();
    await dispatch(getAllSchoolYearsThunk()).unwrap();
  };

  const handleDeleteSuccess = async () => {
    if (!selectedSchoolYear) return;
    try {
      handleCloseModal();
      await dispatch(
        deleteSchoolYearThunk(Number(selectedSchoolYear.id)),
      ).unwrap();
      await dispatch(getAllSchoolYearsThunk()).unwrap();
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const handleAdd = () => {
    setSelectedSchoolYear(null);
    setModalMode('add');
  };

  const handleEdit = (schoolYear: ISchoolYear) => {
    setSelectedSchoolYear(schoolYear);
    setModalMode('edit');
  };

  const handleDelete = (schoolYear: ISchoolYear) => {
    setSelectedSchoolYear(schoolYear);
    setModalMode('delete');
  };

  const columns: IColumn<ISchoolYear>[] = [
    {
      title: 'Период',
      key: 'period',
    },
    {
      title: 'Дата начала',
      key: 'startDate',
    },
    {
      title: 'Дата окончания',
      key: 'endDate',
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
    dispatch(getAllSchoolYearsThunk());
  }, []);

  return (
    <>
      {modalMode === 'add' && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title="Добавление учебного года"
        >
          <SchoolYearCreateForm
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'edit' && selectedSchoolYear && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title={`Редактирование программы`}
        >
          <SchoolYearEditForm
            selectedYear={selectedSchoolYear}
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'delete' && selectedSchoolYear && (
        <EntityDeleteModal
          isOpen={modalMode === 'delete'}
          onCancel={handleCloseModal}
          entityName="период"
          onConfirm={handleDeleteSuccess}
          entityLabel={`${selectedSchoolYear.period}`}
        />
      )}
      <SchoolYearsManagement onAddClick={handleAdd} />
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <DataTable columns={columns} data={data} rowKey={(row) => row.id} />
      )}
    </>
  );
}
