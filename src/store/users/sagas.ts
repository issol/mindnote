import { LogInInfo, SignUpInfo } from './types';
import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logIn, LOG_IN_REQUEST, signUp, SIGN_UP_REQUEST } from './actions';
import { HOST } from 'constants/requests';

const LogInApi = (payload: LogInInfo) =>
  axios.post(HOST + '/users/tokens/', payload);

function* LogInAsync(action: { type: string; payload: LogInInfo }) {
  try {
    const res = yield call(LogInApi, action.payload);
    localStorage.setItem('token', res.data.token);
    yield put(logIn.success());
  } catch (e) {
    localStorage.removeItem('token');
    yield put(logIn.failure(e.request.responseText));
  }
}

const SignUpApi = (payload: SignUpInfo) =>
  axios.post(HOST + '/users/', payload);

function* SignUpAsync(action: { type: string; payload: SignUpInfo }) {
  try {
    const res = yield call(SignUpApi, action.payload);

    localStorage.setItem('token', res.data.token);
    yield put(signUp.success());
  } catch (e) {
    localStorage.removeItem('token');
    yield put(signUp.failure(e.request.responseText));
  }
}
export function* watchUser() {
  yield takeEvery(LOG_IN_REQUEST, LogInAsync);
  yield takeEvery(SIGN_UP_REQUEST, SignUpAsync);
}
