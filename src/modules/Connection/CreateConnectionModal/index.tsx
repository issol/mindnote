import Modal from 'components/Modal';
import TextInput from 'components/TextInput';
import { ConnectionFormType } from 'modules/NoteGraph/container';
import React from 'react';
import styled from 'styled-components';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleSubmit: Function;
  handleCreateConnection: (data: ConnectionFormType) => void;
  isOpenCreateConnectionModal: boolean;
  setIsOpenCreateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateConnectionModal = ({
  isOpenCreateConnectionModal,
  setIsOpenCreateConnectionModal,
  register,
  handleCreateConnection,
  handleSubmit,
}: Props) => {
  return (
    <Modal isOpen={isOpenCreateConnectionModal} setIsOpen={setIsOpenCreateConnectionModal}>
      <form onSubmit={handleSubmit(handleCreateConnection)}>
        <TextInput type="text" label="reason" register={register} required errorHandler={{ isError: false, errorMessage: '' }} />
        <CreateConnectionButton type="submit" value="저장" />
      </form>
    </Modal>
  );
};

const CreateConnectionButton = styled.input`
  width: 50%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

export default CreateConnectionModal;
