import { testSaga } from 'redux-saga-test-plan';

import { GET_SAGA_TEST, SET_SAGA_TEST } from '../actions';
import { fetchSagaTest, watchFetchSagaTest } from '../saga';

describe('SagaExample.sagas', () => {
  it('fetchSagaTest', () => {
    testSaga(fetchSagaTest)
      .next()
      .put({
        type: SET_SAGA_TEST,
        test: 'Hello, World'
      })
      .next()
      .isDone();
  });

  it('watchFetchSagaTest', () => {
    testSaga(watchFetchSagaTest)
      .next()
      .takeLatestEffect(GET_SAGA_TEST, fetchSagaTest)
      .next()
      .isDone();
  });
});
