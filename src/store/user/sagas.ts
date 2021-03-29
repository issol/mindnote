import axios from 'axios';

import { call, put, takeEvery } from 'redux-saga/effects';

import { googleLogIn, GOOGLE_LOG_IN_REQUEST, logIn, LOG_IN_REQUEST, signUp, SIGN_UP_REQUEST } from './actions';
import { HOST } from 'constants/requests';

import { GoogleLogInInfo, LogInInfo, SignUpInfo } from './types';

const mapErrorMessageFromServerForUser = {
  '{"email":["user with this email already exists."]}': '이미 동일한 이메일이 존재합니다.',
};

const LogInApi = (payload: LogInInfo) => axios.post(HOST + '/users/tokens/', payload);

function* LogInAsync({ payload }: ReturnType<typeof logIn.request>) {
  try {
    const res = yield call(LogInApi, payload);
    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common['Authorization'] = `token ${res.data.token}`;
    yield put(logIn.success());
  } catch (e) {
    if (e.request.status >= 400 && e.request.status <= 599) {
      localStorage.removeItem('token');
      yield put(logIn.failure('이메일 또는 비밀번호가 틀립니다.'));
    }
  }
}

const GoogleLogInApi = (payload: GoogleLogInInfo) => axios.post(HOST + '/users/google/', payload);

function* GoogleLogInAsync({ payload }: ReturnType<typeof googleLogIn.request>) {
  try {
    const res = yield call(GoogleLogInApi, payload);
    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common['Authorization'] = `token ${res.data.token}`;
    yield put(logIn.success());
  } catch (e) {
    if (e.request.status >= 400 && e.request.status <= 599) {
      localStorage.removeItem('token');
      yield put(logIn.failure('구글인증 실패'));
    }
  }
}

const SignUpApi = (payload: SignUpInfo) => axios.post(HOST + '/users/', payload);

function* SignUpAsync({ payload }: ReturnType<typeof signUp.request>) {
  try {
    const res = yield call(SignUpApi, payload);

    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common['Authorization'] = `token ${res.data.token}`;
    yield put(signUp.success('회원가입 성공'));
  } catch (e) {
    if (e.request.status >= 400 && e.request.status <= 599) {
      localStorage.removeItem('token');
      yield put(signUp.failure(mapErrorMessageFromServerForUser[e.request.responseText]));
    }
  }
}
export function* watchUser() {
  yield takeEvery(LOG_IN_REQUEST, LogInAsync);
  yield takeEvery(GOOGLE_LOG_IN_REQUEST, GoogleLogInAsync);
  yield takeEvery(SIGN_UP_REQUEST, SignUpAsync);
}
