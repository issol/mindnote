import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { RootState } from 'store';
import { signUp } from 'store/user/actions';
import SignUpPresenter from './presenter';
import StatusModal from 'components/StatusModal';
import { SignUpInfo } from 'store/user/types';

const SignUpContainer = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpenStatusModal, setIsOpenStatusModal] = useState(false);

  const { register, errors, handleSubmit } = useForm<SignUpInfo>();

  const handelSignUp = (data: SignUpInfo) => {
    dispatch(signUp.request(data));
  };

  useEffect(() => {
    if (userReducer.errorMessage) {
      setErrorMessage(userReducer.errorMessage);
      setIsOpenStatusModal(true);
      dispatch(signUp.failure(''));
    }
  }, [dispatch, userReducer.errorMessage]);

  return (
    <>
      <StatusModal
        isOpenStatusModal={isOpenStatusModal}
        statusMessage={errorMessage}
        onClose={() => setIsOpenStatusModal(false)}
      />

      <SignUpPresenter handelSignUp={handelSignUp} register={register} errors={errors} handleSubmit={handleSubmit} />
    </>
  );
};

export default SignUpContainer;
