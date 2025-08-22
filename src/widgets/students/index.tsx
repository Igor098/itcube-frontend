'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  deleteStudentThunk,
  getAllStudentsThunk,
  type IStudent,
} from '@/entities/student';
import { DataTable, type IColumn } from '@/entities/table';
import StudentCreateForm from '@/features/student-create';
import StudentEditForm from '@/features/student-edit';
import { StudentFilters, useStudentFilters } from '@/features/student-filters';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import EntityDeleteModal from '@/shared/ui/entity-delete-modal';
import Modal from '@/shared/ui/modal';

export default function StudentsTable() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.students);
  const { search, setAge, setSearch, values } = useStudentFilters();
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(
    null,
  );
  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);

  const handleCloseModal = () => {
    setModalMode(null);
    setAge(undefined);
  };

  const handleCreateSuccess = async () => {
    handleCloseModal();
    await dispatch(getAllStudentsThunk(values)).unwrap();
  };

  const handleDeleteSuccess = async () => {
    if (!selectedStudent) return;
    try {
      handleCloseModal();
      await dispatch(deleteStudentThunk(Number(selectedStudent.id))).unwrap();
      await dispatch(getAllStudentsThunk(values)).unwrap();
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const handleAdd = useCallback(() => {
    setSelectedStudent(null);
    setModalMode('add');
  }, []);

  const handleEdit = useCallback((student: IStudent) => {
    setSelectedStudent(student);
    setModalMode('edit');
  }, []);

  const handleDelete = useCallback((student: IStudent) => {
    setSelectedStudent(student);
    setModalMode('delete');
  }, []);

  const columns: IColumn<IStudent>[] = useMemo(
    () => [
      {
        title: 'ФИО ученика',
        key: 'fullName',
      },
      {
        title: 'Дата рождения',
        key: 'birthDate',
      },
      {
        title: 'Возраст',
        key: 'age',
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
    ],
    [handleDelete, handleEdit],
  );

  useEffect(() => {
    dispatch(getAllStudentsThunk(values));
  }, [dispatch, values]);

  return (
    <>
      {modalMode === 'add' && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title="Добавление программы"
        >
          <StudentCreateForm
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'edit' && selectedStudent && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title={`Редактирование программы`}
        >
          <StudentEditForm
            selectedStudent={selectedStudent}
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'delete' && selectedStudent && (
        <EntityDeleteModal
          isOpen={modalMode === 'delete'}
          onCancel={handleCloseModal}
          entityName="ученика"
          onConfirm={handleDeleteSuccess}
          entityLabel={`${selectedStudent.fullName}`}
        />
      )}
      <StudentFilters
        onAddClick={() => handleAdd()}
        search={search}
        values={values}
        setAge={setAge}
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
