import { call, takeLatest, put } from "redux-saga/effects";

import * as API from "api";
import {
  AuthActionType,
  fetchAuthStart,
  fetchAuthSuccess,
  fetchAuthFailure,
  setUser,
} from "./actions";

export function* getUser() {
  try {
    yield put(fetchAuthStart());
    const user = yield call(API.getUser);
    yield put(fetchAuthSuccess());
    yield put(setUser(user));
  } catch (error) {
    yield put(fetchAuthFailure(error));
  }
}

export function* watchGetUser() {
  yield takeLatest(AuthActionType.GET_USER, getUser);
}
