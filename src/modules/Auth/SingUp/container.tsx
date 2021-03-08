import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { RootState } from 'store';
import { eraseErrorMessage, signUp } from 'store/user/actions';
import SignUpPresenter from './presenter';
import StatusModal from 'components/StatusModal';
import { SignUpInfo } from 'store/user/types';

const SignUpContainer = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm<SignUpInfo>();
  const [isOpenStatusModal, setIsOpenStatusModal] = useState(false);

  const handelSignUp = (data: SignUpInfo) => {
    dispatch(signUp.request(data));
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

      <SignUpPresenter handelSignUp={handelSignUp} register={register} errors={errors} handleSubmit={handleSubmit} />
    </>
  );
};

export default SignUpContainer;
