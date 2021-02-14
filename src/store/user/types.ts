import { ActionType } from 'typesafe-actions';

import { logIn, setLogInInfo, signUp, setSignUpInfo } from './actions';

export type LogInInfo = {
  email: string;
  password: string;
};

export type SignUpInfo = {
  email: string;
  password: string;
  name: string;
};

export type SetLogInInfoPayload = Required<LogInInfo>;
export type SetSignUpInfoPayload = Required<SignUpInfo>;

export type UserState = {
  isLoggedIn: boolean;
  errorMessage: string;
  logInInfo: LogInInfo;
  signUpInfo: SignUpInfo;
};

export type UserAction =
  | ActionType<typeof logIn>
  | ActionType<typeof signUp>
  | ActionType<typeof setSignUpInfo>
  | ActionType<typeof setLogInInfo>;