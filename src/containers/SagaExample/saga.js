import { put, takeLatest } from 'redux-saga/effects';

import { GET_SAGA_TEST, SET_SAGA_TEST } from './actions';

export function* fetchSagaTest() {
  const val = 'Hello, World';
  yield put({
    type: SET_SAGA_TEST,
    test: val
  });
}

export function* watchFetchSagaTest() {
  yield takeLatest(GET_SAGA_TEST, fetchSagaTest);
}

export const sagaExampleSagas = [watchFetchSagaTest()];
