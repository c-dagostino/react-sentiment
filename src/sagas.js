import { all } from 'redux-saga/effects';
import { sagaExampleSagas } from './containers/SagaExample/saga';

export default function* rootSaga() {
  yield all([...sagaExampleSagas]);
}
