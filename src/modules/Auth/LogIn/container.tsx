import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { RootState } from 'store';
import { logIn } from 'store/user/actions';
import LogInPresenter from './presenter';
import StatusModal from 'components/StatusModal';
import { LogInInfo } from 'store/user/types';
import { ErrorMessage } from '@hookform/error-message';

const LogInContainer = () => {
  const dispatch = useDispatch();
  const [isOpenStatusModal, setIsOpenStatusModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const { register, errors, handleSubmit } = useForm<LogInInfo>();

  const handleLogin = (data: LogInInfo) => {
    dispatch(logIn.request(data));
  };

  useEffect(() => {
    if (userReducer.errorMessage) {
      setErrorMessage(userReducer.errorMessage);
      setIsOpenStatusModal(true);
      dispatch(logIn.failure(''));
    }
  }, [userReducer.errorMessage]);

  return (
    <>
      <StatusModal
        isOpenStatusModal={isOpenStatusModal}
        statusMessage={errorMessage}
        onClose={() => setIsOpenStatusModal(false)}
      />

      <LogInPresenter handleLogin={handleLogin} handleSubmit={handleSubmit} register={register} errors={errors} />
    </>
  );
};

export default LogInContainer;
