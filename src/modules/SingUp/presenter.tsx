import React from 'react';

import TextInput from 'components/TextInput';

import styled from 'styled-components';

const SignUpPresenter = ({ handelSignUp, register, errors, handleSubmit }) => {
  return (
    <SignUpForm onSubmit={handleSubmit(handelSignUp)} className="input-group">
      <TextInput type="email" label="email" register={register} required />
      {errors.email && <ErrorMessage>⚠이메일을 입력해주세요</ErrorMessage>}

      <TextInput
        type="password"
        label="password"
        register={register}
        required
      />
      {errors.password && <ErrorMessage>⚠비밀번호를 입력해주세요</ErrorMessage>}

      <TextInput type="text" label="name" register={register} required />
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
