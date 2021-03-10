import React from 'react';

import Modal from 'components/Modal';
import { ConnectionFormType } from 'modules/NoteGraph/container';
import styled from 'styled-components';

import clockImage from 'assets/images/clock.svg';
import questionMarkImage from 'assets/images/questionMark.svg';

import Moment from 'react-moment';

type Props = {
  handleUpdateConnection: (event: React.MouseEvent<HTMLElement>) => void;
  isOpenUpdateConnectionModal: boolean;
  setIsOpenUpdateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: ConnectionFormType;
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
      <TitleForm>
        <QuestionMarkImage />
        <TitleText>연결 이유</TitleText>
      </TitleForm>
      <InputContentForm
        value={data.reason}
        onChange={changeConnectionFormData}
        placeholder="노트간의 연결점을 생각해서 작성해주세요.(200자)"
        maxLength={200}
      />
      <SubjectLine />
      <DateForm>
        <CreatedAt></CreatedAt>
        <CreatedText>Date Created </CreatedText>
        <Moment format="MM/DD , YYYY HH:mm">{data.createdAt}</Moment>
      </DateForm>

      <ButtonForm>
        <CancleUpdateButton onClick={() => setIsOpenUpdateConnectionModal(false)}>취소</CancleUpdateButton>
        <UpdateConnectionButton onClick={handleUpdateConnection}>저장</UpdateConnectionButton>
      </ButtonForm>
    </Modal>
  );
};

const TitleForm = styled.div`
  display: flex;
  margin-left: 3px;
`;

const TitleText = styled.div`
  font-size: 25px;
  margin-left: 5px;
`;

const QuestionMarkImage = styled.div`
  background-image: url(${questionMarkImage});
  width: 25px;
  height: 25px;
`;

const UpdateConnectionButton = styled.button`
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

const CancleUpdateButton = styled.button`
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

const ButtonForm = styled.div`
  display: flex;
  width: 100%;
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

const SubjectLine = styled.div`
  background: rgb(73, 80, 87);
  height: 3px;
  width: 19rem;
  margin-bottom: 10px;
  margin-left: 8px;
  border-radius: 1px;
`;

export default UpdateConnectionModal;
