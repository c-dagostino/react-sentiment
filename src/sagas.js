import { all } from 'redux-saga/effects';
import { sagaExampleSagas } from './components/SagaExample/saga';

export default function* rootSaga() {
  yield all([
    ...sagaExampleSagas
  ]);
}
