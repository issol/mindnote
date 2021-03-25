import Modal from 'components/Modal';
import React from 'react';

import styled from 'styled-components';

type Props = {
  handleCreateNote: () => void;
  isOpenCreateNoteModal: boolean;
  setIsOpenCreateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  changeNoteFormData: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CreateNoteModal = ({ isOpenCreateNoteModal, setIsOpenCreateNoteModal, handleCreateNote, changeNoteFormData }: Props) => {
  return (
    <Modal isOpen={isOpenCreateNoteModal} setIsOpen={setIsOpenCreateNoteModal}>
      <InputContentForm
        onChange={changeNoteFormData}
        placeholder="노트를 작성해주세요."
        maxLength={100}
        autoFocus
      ></InputContentForm>
      <SubjectLine></SubjectLine>
      <ButtonForm>
        <CancelCreateButton onClick={() => setIsOpenCreateNoteModal(false)}>취소</CancelCreateButton>
        <CreateNoteButton onClick={handleCreateNote}>저장</CreateNoteButton>
      </ButtonForm>
    </Modal>
  );
};

const CreateNoteButton = styled.button`
  ${({ theme }) => theme.common.noneLine}

  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #ff105f, #ffad06);

  border-radius: 30px;
`;

const CancelCreateButton = styled.button`
  ${({ theme }) => theme.common.noneLine}

  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;

  background: linear-gradient(to right, #dcdcdc, #e6e6e6);

  border-radius: 30px;
`;

const ButtonForm = styled.div`
  ${({ theme }) => theme.common.flexRow}

  width: 100%;
`;

const InputContentForm = styled.textarea`
  ${({ theme }) => theme.common.noneLine}

  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 270px;

  padding: 0 10px 0 10px;
  margin-bottom: 10px;

  resize: none;

  font-size: ${({ theme }) => theme.fontSize.contents};
`;

const SubjectLine = styled.div`
  background: rgb(73, 80, 87);
  height: 3px;
  width: 19rem;

  margin-left: 8px;
  border-radius: 1px;
`;

export default CreateNoteModal;
