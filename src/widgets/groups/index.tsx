'use client';

import { useEffect, useState } from 'react';

import { type IGroup } from '@/entities/group';
import { getAllGroupsThunk } from '@/entities/group';
import { DataTable, type IColumn } from '@/entities/table';
import { GroupFilters, useGroupFilters } from '@/features/group-filters';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Modal } from '@/shared/ui/modal';

export default function GroupsTable() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.groups);
  const { search, setIsActive, setSearch, values } = useGroupFilters();
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'delete' | null>(
    null,
  );
  const [selectedGroup, setSelectedGroup] = useState<IGroup | null>(null);

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
      <Modal
        isOpen={modalMode !== null}
        onClose={() => {
          setModalMode(null);
          setSelectedGroup(null);
        }}
        title={
          modalMode === 'add'
            ? 'Добавление группы'
            : modalMode === 'edit'
              ? 'Редактирование группы'
              : 'Удаление группы'
        }
        footer={<div>Тут футер</div>}
      >
        <p>
          {modalMode === 'delete'
            ? 'Вы уверены, что хотите удалить группу?'
            : 'Тут будет форма'}
        </p>
      </Modal>
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
