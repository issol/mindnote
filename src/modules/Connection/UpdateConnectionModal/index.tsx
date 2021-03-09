import React from 'react';

import Modal from 'components/Modal';
import { ConnectionReason } from 'modules/NoteGraph/container';
import styled from 'styled-components';

type Props = {
  handleUpdateConnection: (event: React.MouseEvent<HTMLElement>) => void;
  isOpenUpdateConnectionModal: boolean;
  setIsOpenUpdateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: ConnectionReason;
  changeConnectionFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UpdateConnectionModal = ({
  handleUpdateConnection,
  isOpenUpdateConnectionModal,
  setIsOpenUpdateConnectionModal,
  data,
  changeConnectionFormData,
}: Props) => {
  return (
    <Modal isOpen={isOpenUpdateConnectionModal} setIsOpen={setIsOpenUpdateConnectionModal}>
      <InputContentForm type="text" value={data.reason} onChange={changeConnectionFormData} />

      <CreateConnectionButton onClick={handleUpdateConnection}>save</CreateConnectionButton>
    </Modal>
  );
};

const CreateConnectionButton = styled.button`
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

const InputContentForm = styled.input`

  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
}
`;

export default UpdateConnectionModal;
