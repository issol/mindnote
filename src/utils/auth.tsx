import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { UserState } from 'store/users/types';

export const isLoginFormEmpty = (userInfo: any) => {
  if (userInfo.email === '') {
    return '이메일을 입력해주세요';
  } else if (userInfo.password === '') {
    return '비밀번호를 입력해주세요';
  }
  return '';
};
