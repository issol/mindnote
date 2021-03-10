import React from 'react';

import Modal from 'components/Modal';

import { NoteFormType } from 'modules/NoteGraph/container';
import styled from 'styled-components';

import clockImage from 'assets/images/clock.svg';
import noteImage from 'assets/images/note.svg';

import Moment from 'react-moment';

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
      <TitleForm>
        <NoteImage />
        <TitleText>노트</TitleText>
      </TitleForm>

      <InputContentForm
        value={data.contents}
        onChange={changeNoteFormData}
        placeholder="노트를 채워주세요.   (100자)"
        maxLength={100}
      />
      <SubjectLine />
      <DateForm>
        <CreatedAt></CreatedAt>
        <CreatedText>Date Created </CreatedText>
        <Moment format="MM/DD , YYYY HH:mm">{data.createdAt}</Moment>
      </DateForm>
      <ButtonForm>
        <CancelUpdateButton onClick={() => setIsOpenUpdateNoteModal(false)}>취소</CancelUpdateButton>
        <UpdateNoteButton onClick={handleUpdateNote}>저장</UpdateNoteButton>
      </ButtonForm>
    </Modal>
  );
};

const TitleForm = styled.div`
  display: flex;
  margin-left: 10px;
`;

const TitleText = styled.div`
  font-size: 25px;
  margin-left: 10px;
`;

const NoteImage = styled.div`
  background-image: url(${noteImage});
  width: 25px;
  height: 25px;
`;

const UpdateNoteButton = styled.button`
  width: 40%;
  padding: 10px 30px;
  margin: 0 auto;
  height: 40px;
  display: block;

  cursor: pointer;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

const CancelUpdateButton = styled.button`
  width: 40%;
  padding: 10px 30px;
  margin: 0 auto;
  height: 40px;

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
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 20px;
  resize: none;
`;

const SubjectLine = styled.div`
  background: rgb(73, 80, 87);
  height: 3px;
  width: 19rem;
  margin-bottom: 10px;
  margin-left: 8px;
  border-radius: 1px;
`;

const DateForm = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  margin-left: 8px;
`;

const CreatedAt = styled.div`
  background-image: url(${clockImage});
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const CreatedText = styled.p`
  margin-right: 20px;
`;

export default UpdateNoteModal;
