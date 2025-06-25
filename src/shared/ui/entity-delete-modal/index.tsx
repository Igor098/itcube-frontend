import Button from '@/shared/ui/button';
import Modal from '@/shared/ui/modal';

interface EntityDeleteModalProps {
  isOpen: boolean;
  entityName: string;
  entityLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export default function EntityDeleteModal({
  entityLabel,
  entityName,
  isLoading = false,
  isOpen,
  onCancel,
  onConfirm,
}: EntityDeleteModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} title={`Удаление ${entityName}`}>
      <p>
        Вы уверены, что хотите удалить {entityName}
        {entityLabel ? ` «${entityLabel}»` : ''}?
      </p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <Button
          size="small"
          colorType="primary"
          color="blue"
          onClick={onConfirm}
          disabled={isLoading}
        >
          {isLoading ? 'Удаление...' : 'Удалить'}
        </Button>
        <Button
          size="small"
          colorType="secondary"
          onClick={onCancel}
          disabled={isLoading}
        >
          Отмена
        </Button>
      </div>
    </Modal>
  );
}
