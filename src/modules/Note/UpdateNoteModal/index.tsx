import React from 'react';

import Modal from 'components/Modal';

import { NoteFormType } from 'modules/NoteGraph/container';
import styled from 'styled-components';

type Props = {
  handleUpdateNote: (event: React.MouseEvent<HTMLElement>) => void;
  isOpenUpdateNoteModal: boolean;
  setIsOpenUpdateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: NoteFormType;
  changeNoteFormData: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
      <InputContentForm
        value={data.contents}
        onChange={changeNoteFormData}
        placeholder="노트를 채워주세요.   (100자)"
        maxLength={100}
      />
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

  background: linear-gradient(to right, #dcdcdc, #e6e6e6);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

const ButtonForm = styled.div`
  width: 100%;
  display: flex;
`;

const InputContentForm = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 270px;
  border: none;
  outline: none;
  padding: 0 10px 0 10px;
  margin-bottom: 10px;
  font-size: 30px;
  resize: none;
`;

export default UpdateNoteModal;
