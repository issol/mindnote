import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';

import TextInput from 'components/TextInput';

import styled from 'styled-components';

type inputProps = {
  email: string;
  password: string;
  name: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  handelSignUp: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errors: DeepMap<inputProps, FieldError>;
};

const SignUpPresenter = ({ handelSignUp, register, errors, handleSubmit }: Props) => {
  return (
    <SignUpForm onSubmit={handleSubmit(handelSignUp)} className="input-group">
      <TextInput type="email" label="email" register={register} required placeholder="" />
      {errors.email && <ErrorMessage>⚠이메일을 입력해주세요</ErrorMessage>}

      <TextInput type="password" label="password" register={register} required placeholder="" />
      {errors.password && <ErrorMessage>⚠비밀번호를 입력해주세요</ErrorMessage>}

      <TextInput type="text" label="name" register={register} required placeholder="" />
      {errors.name && <ErrorMessage>⚠이름을 입력해주세요</ErrorMessage>}

      <SignUpButton type="submit" value="SignUp" />
    </SignUpForm>
  );
};

const SignUpForm = styled.form`
  width: 75%;
  left: 50px;
  margin: 30px 0;
`;

const SignUpButton = styled.input`
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

export default SignUpPresenter;
