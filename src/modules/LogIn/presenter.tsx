import React from 'react';
import NewInput from 'components/NewInput';

import { DeepMap, FieldError } from 'react-hook-form';

import { UserState } from 'store/users/types';
import './styles.css';

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
  userReducer: UserState;
  changeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (event: React.MouseEvent<HTMLElement>) => void;
  handleSubmit: any;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errors: DeepMap<inputProps, FieldError>;
};

const LogInPresenter = ({
  userReducer,
  changeEmail,
  changePassword,
  handleLogin,
  handleSubmit,
  register,
  errors,
}: Props) => {
  return (
    <div className="input-group">
      <NewInput
        type="email"
        label="email"
        value={userReducer.logInInfo.email}
        onChange={changeEmail}
        register={register}
        required
      />

      {errors.email && <p>This field is required</p>}

      <NewInput
        type="password"
        label="password"
        value={userReducer.logInInfo.password}
        onChange={changePassword}
        register={register}
        required
      />
      {errors.password && <p>This field is required</p>}
      <button className="login" onClick={handleSubmit(handleLogin)}>
        login
      </button>
    </div>
  );
};

export default LogInPresenter;
