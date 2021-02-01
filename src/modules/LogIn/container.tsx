import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { RootState } from 'store';
import { logIn, setLogInInfo } from 'store/users/actions';
import LogInPresenter from './presenter';
import StatusModal from 'components/StatusModal';

type Props = {
  email: string;
  password: string;
};

const LogInContainer = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const { register, errors, handleSubmit } = useForm<Props>();

  const handleLogin = () => {
    dispatch(logIn.request(userReducer.logInInfo));
  };

  const changeEmail = (e: any) => {
    dispatch(setLogInInfo({ email: e.target.value }));
  };

  const changePassword = (e: any) => {
    dispatch(setLogInInfo({ password: e.target.value }));
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
        userReducer={userReducer}
        handleLogin={handleLogin}
        changeEmail={changeEmail}
        changePassword={changePassword}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </>
  );
};

export default LogInContainer;
