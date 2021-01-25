import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { RootState } from 'store';
import { logIn, setLogInInfo } from 'store/users/actions';
import LogInPresenter from './presenter';

const LogInContainer = () => {
  const dispatch = useDispatch();

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const handleLogin = () => {
    dispatch(logIn.request(userReducer.logInInfo));
  };

  const changeEmail = (value: string) => {
    dispatch(setLogInInfo({ email: value }));
  };

  const changePassword = (value: string) => {
    dispatch(setLogInInfo({ password: value }));
  };

  return (
    <>
      {userReducer.isLoggedIn ? (
        <Redirect to={'/Home'} />
      ) : (
        <LogInPresenter
          userReducer={userReducer}
          handleLogin={handleLogin}
          changeEmail={changeEmail}
          changePassword={changePassword}
        />
      )}
    </>
  );
};

export default LogInContainer;
