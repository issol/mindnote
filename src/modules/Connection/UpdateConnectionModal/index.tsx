import React from 'react';

import Modal from 'components/Modal';
import { ConnectionReason } from 'modules/NoteGraph/container';
import styled from 'styled-components';

type Props = {
  handleUpdateConnection: (event: React.MouseEvent<HTMLElement>) => void;
  isOpenUpdateConnectionModal: boolean;
  setIsOpenUpdateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: ConnectionReason;
  changeConnectionFormData: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
      <InputContentForm
        value={data.reason}
        onChange={changeConnectionFormData}
        placeholder="노트간의 연결점을 생각해서 작성해주세요.(200자)"
      />
      <ButtonForm>
        <CancleUpdateButton onClick={() => setIsOpenUpdateConnectionModal(false)}>취소</CancleUpdateButton>
        <UpdateConnectionButton onClick={handleUpdateConnection}>저장</UpdateConnectionButton>
      </ButtonForm>
    </Modal>
  );
};

const UpdateConnectionButton = styled.button`
  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

const CancleUpdateButton = styled.button`
  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;

  background: linear-gradient(to right, #dcdcdc, #e6e6e6);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

const InputContentForm = styled.textarea`

  display: block;
  box-sizing: border-box;
  width: 100%;
  height : 270px;
  border : none;
  outline :none;
  padding: 0 10px 0 10px
  margin-bottom: 10px;
  font-size: 30px;
}
`;

const ButtonForm = styled.div`
  display: flex;
  width: 100%;
`;

export default UpdateConnectionModal;
