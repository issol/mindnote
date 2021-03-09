import Modal from 'components/Modal';
import React from 'react';

import styled from 'styled-components';

type Props = {
  handleCreateNote: () => void;
  isOpenCreateNoteModal: boolean;
  setIsOpenCreateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  changeNoteFormData: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CreateNoteModal = ({
  isOpenCreateNoteModal,
  setIsOpenCreateNoteModal,

  handleCreateNote,

  changeNoteFormData,
}: Props) => {
  return (
    <Modal isOpen={isOpenCreateNoteModal} setIsOpen={setIsOpenCreateNoteModal}>
      <InputContentForm
        onChange={changeNoteFormData}
        placeholder="노트를 작성해주세요."
        maxLength={100}
        autoFocus
      ></InputContentForm>
      <ButtonForm>
        <CancelCreateButton onClick={() => setIsOpenCreateNoteModal(false)}>취소</CancelCreateButton>
        <CreateNoteButton onClick={handleCreateNote}>저장</CreateNoteButton>
      </ButtonForm>
    </Modal>
  );
};

const CreateNoteButton = styled.button`
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

const CancelCreateButton = styled.button`
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

export default CreateNoteModal;
