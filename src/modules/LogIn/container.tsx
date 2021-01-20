import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'store';
import { logIn, setLogInInfo } from 'store/users/actions';
import LogInPresenter from './presenter';

const LogInContainer = () => {
  const dispatch = useDispatch();

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const HandleLogin = () => {
    dispatch(logIn.request(userReducer.logInInfo));
  };

  const ChangeEmail = (value: string) => {
    dispatch(setLogInInfo({ email: value }));
  };
  const ChangePassword = (value: string) => {
    dispatch(setLogInInfo({ password: value }));
  };

  return (
    <>
      {userReducer.isLoggedIn ? (
        <Redirect to={'/Home'} />
      ) : (
        <LogInPresenter
          userReducer={userReducer}
          HandleLogin={HandleLogin}
          ChangeEmail={ChangeEmail}
          ChangePassword={ChangePassword}
        />
      )}
    </>
  );
};

export default LogInContainer;
