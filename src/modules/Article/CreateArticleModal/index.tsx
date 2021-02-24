import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';

import TextInput from 'components/TextInput';

import styled from 'styled-components';
import { ArticleInfo } from 'store/articleList/types';
import Modal from 'components/Modal';

type InputProps = {
  subject: string;
  description: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleSubmit: Function;
  handleCreateArticle: (data: ArticleInfo) => void;
  isOpenCreateArticleModal: boolean;
  errors: DeepMap<InputProps, FieldError>;
};

const CreateArticleModal = ({ isOpenCreateArticleModal, register, handleSubmit, handleCreateArticle, errors }: Props) => {
  return (
    <Modal isOpen={isOpenCreateArticleModal}>
      <form onSubmit={handleSubmit(handleCreateArticle)}>
        <TextInput
          type="text"
          label="subject"
          register={register}
          required
          errorHandler={{ isError: !!errors.subject, errorMessage: '제목을 입력해주세요.' }}
        />

        <TextInput
          type="text"
          label="description"
          register={register}
          errorHandler={{ isError: !!errors.description, errorMessage: '' }}
        />
        <CreateArticleButton type="submit" value="저장" />
      </form>
    </Modal>
  );
};

const CreateArticleButton = styled.input`
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

export default CreateArticleModal;
