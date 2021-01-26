import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RootState } from 'store';
import { logIn, setLogInInfo } from 'store/users/actions';
import LogInPresenter from './presenter';
import { Alert, Button, Modal } from 'react-bootstrap';

import StatusModal from 'components/StatusModal';
import { isLoginFormEmpty } from 'utils/auth';

const LogInContainer = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const handleLogin = () => {
    dispatch(logIn.request(userReducer.logInInfo));
    setModalShow(true);
  };

  const changeEmail = (value: string) => {
    dispatch(setLogInInfo({ email: value }));
  };

  const changePassword = (value: string) => {
    dispatch(setLogInInfo({ password: value }));
  };

  useEffect(() => {
    if (userReducer.statusMessage !== '') {
      setErrorMessage(userReducer.statusMessage);
    }
  }, [userReducer.statusMessage]);

  return (
    <>
      {modalShow ? (
        <StatusModal
          statusMessage={errorMessage}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : null}
      <LogInPresenter
        userReducer={userReducer}
        handleLogin={handleLogin}
        changeEmail={changeEmail}
        changePassword={changePassword}
      />
    </>
  );
};

export default LogInContainer;
