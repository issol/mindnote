import Modal from 'components/Modal';
import TextInput from 'components/TextInput';
import { ConnectionFormType } from 'modules/Note/NoteGraph';
import React from 'react';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleSubmit: Function;
  handleCreateConnection: (data: ConnectionFormType) => void;
  isOpenCreateConnectionModal: boolean;
};

const CreateConnectionModal = ({ isOpenCreateConnectionModal, register, handleCreateConnection, handleSubmit }: Props) => {
  return (
    <Modal isOpen={isOpenCreateConnectionModal}>
      <form onSubmit={handleSubmit(handleCreateConnection)}>
        <TextInput type="text" label="reason" register={register} required errorHandler={{ isError: false, errorMessage: '' }} />
        <input type="submit" value="저장" />
      </form>
    </Modal>
  );
};

export default CreateConnectionModal;
