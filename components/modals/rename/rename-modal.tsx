'use client';

import { Modal } from '@mantine/core';
import { FormEventHandler, useState, useTransition } from 'react';

import { useRenameModal } from './use-rename-modal';
import { updateName } from '@/actions/update-name';

export const RenameModal = () => {
  const [isPending, startTransition] = useTransition();

  const { isOpen, onClose, initialValues } = useRenameModal();

  const [title, setTitle] = useState(initialValues.title);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    startTransition(() => {
      updateName(initialValues.id, title)
        .then(() => {
          //display success message or toast
        })
        .catch(() => {
          //display error message or toast
        });
    });
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Rename Modal">
      <div>MODAL</div>
    </Modal>
  );
};
