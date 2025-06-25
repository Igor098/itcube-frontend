'use client';

import { useEffect, useState } from 'react';

import {
  deleteGroupThunk,
  getAllGroupsThunk,
  type IGroup,
} from '@/entities/group';
import { DataTable, type IColumn } from '@/entities/table';
import { GroupCreateForm } from '@/features/group-create';
import { GroupEditForm } from '@/features/group-edit';
import { GroupFilters, useGroupFilters } from '@/features/group-filters';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import EntityDeleteModal from '@/shared/ui/entity-delete-modal';
import Modal from '@/shared/ui/modal';

export default function GroupsTable() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.groups);
  const { search, setIsActive, setSearch, values } = useGroupFilters();
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(
    null,
  );
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);

  const handleCloseModal = () => {
    setModalMode(null);
    setSelectedGroup(null);
  };

  const handleCreateSuccess = async () => {
    handleCloseModal();
    await dispatch(getAllGroupsThunk(values)).unwrap();
  };

  const handleDeleteSuccess = async () => {
    if (!selectedGroup) return;
    try {
      handleCloseModal();
      await dispatch(deleteGroupThunk(Number(selectedGroup.id))).unwrap();
      await dispatch(getAllGroupsThunk(values)).unwrap();
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const handleAdd = () => {
    setSelectedGroup(null);
    setModalMode('add');
  };

  const handleEdit = (group: IGroup) => {
    setSelectedGroup(group);
    setModalMode('edit');
  };

  const handleDelete = (group: IGroup) => {
    setSelectedGroup(group);
    setModalMode('delete');
  };

  const columns: IColumn<IGroup>[] = [
    {
      title: 'Код группы',
      key: 'name',
    },
    {
      title: 'Педагог',
      key: 'teacher',
      render: (item) => item.teacher.fullName,
    },
    {
      title: 'Количество участников',
      key: 'studentsCount',
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
    dispatch(getAllGroupsThunk(values));
  }, [dispatch, values]);

  return (
    <>
      {modalMode === 'add' && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title="Добавление группы"
        >
          <GroupCreateForm
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'edit' && selectedGroup && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title={`Редактирование группы «${selectedGroup.name}»`}
        >
          <GroupEditForm
            selectedGroup={selectedGroup}
            onCancel={handleCloseModal}
            onSuccess={handleCreateSuccess}
          />
        </Modal>
      )}
      {modalMode === 'delete' && selectedGroup && (
        <EntityDeleteModal
          isOpen={modalMode === 'delete'}
          onCancel={handleCloseModal}
          entityName="группу"
          onConfirm={handleDeleteSuccess}
          entityLabel={`«${selectedGroup.name}»`}
        />
      )}
      <GroupFilters
        onAddClick={() => handleAdd()}
        search={search}
        values={values}
        setIsActive={setIsActive}
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
