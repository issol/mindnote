import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { RootState } from 'store';
import { logIn } from 'store/users/actions';
import LogInPresenter from './presenter';
import StatusModal from 'components/StatusModal';
import { LogInInfo } from 'store/users/types';

const LogInContainer = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const { register, errors, handleSubmit } = useForm<LogInInfo>();

  const handleLogin = (data) => {
    dispatch(logIn.request(data));
  };

  useEffect(() => {
    if (userReducer.errorMessage !== '') {
      setErrorMessage(userReducer.errorMessage);
      setIsOpenModal(true);
    }
  }, [userReducer.errorMessage]);

  return (
    <>
      <StatusModal
        statusMessage={errorMessage}
        show={isOpenModal}
        onHide={() => setIsOpenModal(false)}
      />

      <LogInPresenter
        onSubmit={handleLogin}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </>
  );
};

export default LogInContainer;
