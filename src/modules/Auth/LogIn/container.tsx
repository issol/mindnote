import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { RootState } from 'store';
import { eraseErrorMessage, logIn } from 'store/user/actions';
import LogInPresenter from './presenter';
import { LogInInfo } from 'store/user/types';

const LogInContainer = () => {
  const dispatch = useDispatch();

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const [isOpenStatusModal, setIsOpenStatusModal] = useState(false);

  const { register, errors, handleSubmit } = useForm<LogInInfo>();

  const handleLogin = (data: LogInInfo) => {
    dispatch(logIn.request(data));
  };

  const handleEraseErrorMessage = () => {
    dispatch(eraseErrorMessage());
  };

  return (
    <LogInPresenter
      handleLogin={handleLogin}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      userReducer={userReducer}
      setIsOpenStatusModal={setIsOpenStatusModal}
      handleEraseErrorMessage={handleEraseErrorMessage}
    />
  );
};

export default LogInContainer;
