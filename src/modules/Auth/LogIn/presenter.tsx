import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';

import TextInput from 'components/TextInput';

import styled from 'styled-components';
import { LogInInfo, UserState } from 'store/user/types';
import StatusModal from 'components/StatusModal';

type InputValueType = {
  email: string;
  password: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  handleLogin: (data: LogInInfo) => void;
  userReducer: UserState;
  setIsOpenStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleEraseErrorMessage: () => void;
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errors: DeepMap<InputValueType, FieldError>;
};

const LogInPresenter = ({
  handleLogin,
  handleSubmit,
  register,
  errors,
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
      <LoginForm onSubmit={handleSubmit(handleLogin)} className="input-group">
        <TextInput
          type="email"
          label="email"
          register={register}
          required
          errorHandler={{ isError: !!errors.email, errorMessage: '⚠아이디를 입력해주세요' }}
        />

        <TextInput
          type="password"
          label="password"
          register={register}
          required
          errorHandler={{ isError: !!errors.password, errorMessage: '⚠비밀번호를 입력해주세요' }}
        />

        <LoginButton type="submit" className="login" value="Login" />
      </LoginForm>
    </>
  );
};

const LoginForm = styled.form`
  width: 75%;
  left: 50px;
  margin: 30px 0;
`;

const LoginButton = styled.input`
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

export default LogInPresenter;
