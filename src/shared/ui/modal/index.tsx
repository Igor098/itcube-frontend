import { type ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createFocusTrap, type FocusTrap } from 'focus-trap';

import styles from './styles.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  footer?: ReactNode;
}

export default function Modal({
  children,
  footer,
  isOpen,
  onClose,
  title,
}: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const focusTrapRef = useRef<FocusTrap | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      focusTrapRef.current = createFocusTrap(modalRef.current, {
        escapeDeactivates: true,
        clickOutsideDeactivates: false,
        allowOutsideClick: true,
        fallbackFocus: modalRef.current,
      });
      focusTrapRef.current.activate();
    }

    return () => {
      focusTrapRef.current?.deactivate();
      focusTrapRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.backdrop}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex={-1}
        className={styles.modal}
      >
        {title && (
          <h3 id="modal-title" className={styles.title}>
            {title}
          </h3>
        )}
        <div className={styles.content}>{children}</div>
        {footer}
      </div>
    </div>,
    modalRoot,
  );
}
