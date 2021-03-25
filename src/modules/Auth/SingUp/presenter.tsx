import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';

import TextInput from 'components/TextInput';

import styled from 'styled-components';
import { SignUpInfo, UserState } from 'store/user/types';
import StatusModal from 'components/StatusModal';

type InputValueType = {
  email: string;
  password: string;
  name: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  handelSignUp: (data: SignUpInfo) => void;
  userReducer: UserState;
  setIsOpenStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleEraseErrorMessage: () => void;
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errors: DeepMap<InputValueType, FieldError>;
};

const SignUpPresenter = ({
  handelSignUp,
  register,
  errors,
  handleSubmit,
  userReducer,
  setIsOpenStatusModal,
  handleEraseErrorMessage,
}: Props) => {
  return (
    <>
      <StatusModal
        isOpenStatusModal={!!userReducer.errorMessage}
        setIsOpenStatusModal={setIsOpenStatusModal}
        statusMessage={userReducer.errorMessage}
        onClose={handleEraseErrorMessage}
      />
      <SignUpForm onSubmit={handleSubmit(handelSignUp)} className="input-group">
        <TextInput
          type="email"
          label="email"
          register={register}
          required
          errorHandler={{ isError: !!errors.email, errorMessage: '⚠이메일을 입력해주세요' }}
        />

        <TextInput
          type="password"
          label="password"
          register={register}
          required
          errorHandler={{ isError: !!errors.password, errorMessage: '⚠비밀번호를 입력해주세요' }}
        />

        <TextInput
          type="text"
          label="name"
          register={register}
          required
          errorHandler={{ isError: !!errors.name, errorMessage: '⚠이름을 입력해주세요' }}
        />

        <SignUpButton type="submit" value="SignUp" />
      </SignUpForm>
    </>
  );
};

const SignUpForm = styled.form`
  width: 75%;

  margin: 30px auto;
`;

const SignUpButton = styled.input`
  ${({ theme }) => theme.common.noneLine}
  width: 50%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #ff105f, #ffad06);

  border-radius: 30px;
`;

export default SignUpPresenter;
