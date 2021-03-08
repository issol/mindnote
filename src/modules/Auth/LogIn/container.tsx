import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { RootState } from 'store';
import { eraseErrorMessage, logIn } from 'store/user/actions';
import LogInPresenter from './presenter';
import StatusModal from 'components/StatusModal';
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
    <>
      <StatusModal
        isOpenStatusModal={!!userReducer.errorMessage}
        setIsOpenStatusModal={setIsOpenStatusModal}
        statusMessage={userReducer.errorMessage}
        onClose={handleEraseErrorMessage}
      />

      <LogInPresenter handleLogin={handleLogin} handleSubmit={handleSubmit} register={register} errors={errors} />
    </>
  );
};

export default LogInContainer;
