import axios from 'axios';

import { call, put, takeEvery } from 'redux-saga/effects';

import { logIn, LOG_IN_REQUEST, signUp, SIGN_UP_REQUEST } from './actions';
import { HOST } from 'constants/requests';
import { LogInInfo, SignUpInfo } from './types';

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

const SignUpApi = (payload: SignUpInfo) => axios.post(HOST + '/users/', payload);

function* SignUpAsync({ type, payload }: ReturnType<typeof signUp.request>) {
  try {
    const res = yield call(SignUpApi, payload);
    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common['Authorization'] = `token ${res.data.token}`;
    yield put(signUp.success());
  } catch (e) {
    if (e.request.status >= 400 && e.request.status <= 599) {
      localStorage.removeItem('token');
      yield put(signUp.failure(mapErrorMessageFromServerForUser[e.request.responseText]));
    }
  }
}
export function* watchUser() {
  yield takeEvery(LOG_IN_REQUEST, LogInAsync);
  yield takeEvery(SIGN_UP_REQUEST, SignUpAsync);
}
