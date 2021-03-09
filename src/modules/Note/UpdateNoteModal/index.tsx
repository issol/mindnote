import React from 'react';

import Modal from 'components/Modal';

import { NoteFormType } from 'modules/NoteGraph/container';
import styled from 'styled-components';

type Props = {
  handleUpdateNote: (event: React.MouseEvent<HTMLElement>) => void;
  isOpenUpdateNoteModal: boolean;
  setIsOpenUpdateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: NoteFormType;
  changeNoteFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UpdateNoteModal = ({
  handleUpdateNote,
  isOpenUpdateNoteModal,
  setIsOpenUpdateNoteModal,
  data,
  changeNoteFormData,
}: Props) => {
  return (
    <Modal isOpen={isOpenUpdateNoteModal} setIsOpen={setIsOpenUpdateNoteModal}>
      <InputContentForm type="text" value={data.contents} onChange={changeNoteFormData} placeholder="노트를 채워주세요." />
      <ButtonForm>
        <CancelUpdateButton onClick={() => setIsOpenUpdateNoteModal(false)}>취소</CancelUpdateButton>
        <UpdateNoteButton onClick={handleUpdateNote}>저장</UpdateNoteButton>
      </ButtonForm>
    </Modal>
  );
};

const UpdateNoteButton = styled.button`
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

const CancelUpdateButton = styled.button`
  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #dcdcdc, #e6e6e6);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

const ButtonForm = styled.div`
  width: 100%;
  display: flex;
`;

const InputContentForm = styled.input`

  display: block;
  box-sizing: border-box;
  width: 100%;
  border:none;
  outline:none;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 30px;
}
`;

export default UpdateNoteModal;
