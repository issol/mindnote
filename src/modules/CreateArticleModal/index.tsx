import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';

import TextInput from 'components/TextInput';

import styled from 'styled-components';

type InputProps = {
  subject: string;
  description: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleSubmit: Function;
  handleCreateArticle: (event: React.MouseEvent<HTMLElement>) => void;
  errors: DeepMap<InputProps, FieldError>;
};

const CreateArticleModal = ({ register, handleSubmit, handleCreateArticle, errors }: Props) => {
  return (
    <form onSubmit={handleSubmit(handleCreateArticle)}>
      <TextInput type="text" label="subject" register={register} required />
      {errors.subject && <p>제목을 입력해주세요.</p>}
      <TextInput type="text" label="description" register={register} />
      <CreateArticleButton type="submit" value="저장" />
    </form>
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
