import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setSignUpInfo, signUp } from 'store/users/actions';
import SignUpPresenter from './presenter';

const SignUpContainer = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const changeEmail = (value: string) => {
    dispatch(setSignUpInfo({ email: value }));
  };

  const changePassword = (value: string) => {
    dispatch(setSignUpInfo({ password: value }));
  };

  const changeName = (value: string) => {
    dispatch(setSignUpInfo({ name: value }));
  };

  const handelSignUp = () => {
    if (isValid()) {
      dispatch(signUp.request(userReducer.signUpInfo));
    }
  };

  const isValid = () => {
    if (userReducer.signUpInfo.email === '') {
      setErrorMessage('아이디를 입력해주세요.');
      return false;
    } else if (userReducer.signUpInfo.password === '') {
      setErrorMessage('비밀번호를 입력해주세요.');
      return false;
    } else if (userReducer.signUpInfo.password === '') {
      setErrorMessage('이름을 입력해주세요.');
      return false;
    }
    return true;
  };
  
  return (
    <SignUpPresenter
      userReducer={userReducer}
      changeEmail={changeEmail}
      changePassword={changePassword}
      changeName={changeName}
      handelSignUp={handelSignUp}
    />
  );
};

export default SignUpContainer;
