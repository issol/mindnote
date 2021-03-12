import { createReducer } from 'typesafe-actions';

import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  SET_LOG_IN_INFO,
  SIGN_UP_FAILURE,
  SET_SIGN_UP_INFO,
  SIGN_UP_SUCCESS,
  ERASE_ERROR_MESSAGE,
} from './actions';
import { UserState, UserAction } from './types';

const initialState: UserState = {
  isLoggedIn: null,
  errorMessage: '',
  statusMessage: '',
  logInInfo: {
    email: '',
    password: '',
  },
  signUpInfo: {
    email: '',
    password: '',
    name: '',
  },
};

const userReducer = createReducer<UserState, UserAction>(initialState, {
  [SET_LOG_IN_INFO]: (state, action) => ({
    ...state,
    logInInfo: {
      ...state.logInInfo,
      ...action.payload,
    },
  }),

  [LOG_IN_SUCCESS]: (state) => ({
    ...state,
    isLoggedIn: true,
  }),
  [LOG_IN_FAILURE]: (state, action) => ({
    ...state,
    isLoggedIn: false,
    errorMessage: action.payload,
  }),
  [SET_SIGN_UP_INFO]: (state, action) => ({
    ...state,
    signUpInfo: {
      ...state.signUpInfo,
      ...action.payload,
    },
  }),
  [SIGN_UP_SUCCESS]: (state, action) => ({
    ...state,
    isLoggedIn: true,
    statusMessage: action.payload,
  }),
  [SIGN_UP_FAILURE]: (state, action) => ({
    ...state,
    isLoggedIn: false,
    errorMessage: action.payload,
  }),
  [ERASE_ERROR_MESSAGE]: (state) => ({
    ...state,
    errorMessage: '',
  }),
});

export default userReducer;
