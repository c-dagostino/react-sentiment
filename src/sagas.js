import { all } from 'redux-saga/effects';
import { tweetSagas } from './containers/Tweets/saga';

export default function* rootSaga() {
  yield all([...tweetSagas]);
}
