import React from 'react';
import TextInput from 'components/TextInput';

import { DeepMap, FieldError } from 'react-hook-form';
import styled from 'styled-components';

type inputProps = {
  email: string;
  password: string;
};

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errors: DeepMap<inputProps, FieldError>;
};

const LogInPresenter = ({
  onSubmit,
  handleSubmit,
  register,
  errors,
}: Props) => {
  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)} className="input-group">
      <TextInput type="email" label="email"  register={register} required  placeholder=''/>
      {errors.email && <ErrorMessage>⚠이메일을 입력해주세요</ErrorMessage>}
      <TextInput
        type="password"
        label="password"
        register={register}
        required
        placeholder=''
      />
      {errors.password && <ErrorMessage>⚠비밀번호를 입력해주세요</ErrorMessage>}
      <LoginButton type="submit" className="login" value="Login" />
    </LoginForm>
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

const ErrorMessage = styled.p`
  color: #bf1650;
  display: inline;
`;

export default LogInPresenter;
