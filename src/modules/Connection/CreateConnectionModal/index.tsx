import Modal from 'components/Modal';
import TextInput from 'components/TextInput';
import { ConnectionFormType } from 'pages/ArticleDetail/container';
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
        <TextInput type="text" label="leftNote" register={register} required />
        <TextInput type="text" label="rightNote" register={register} required />
        <TextInput type="text" label="reason" register={register} required />
        <input type="submit" value="저장" />
      </form>
    </Modal>
  );
};

export default CreateConnectionModal;
