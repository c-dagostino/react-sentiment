import { put, takeLatest, call } from 'redux-saga/effects';
import {
  GET_TWEETS_URL,
  FETCH_TWEETS,
  FETCH_TWEETS_SUCCESS
} from '../App/constants';
import { repoLoadingError } from '../App/actions';
import request from '../../utils/request';

export function* fetchTweets(action) {
  try {
    const tweets = yield call(
      request,
      `${GET_TWEETS_URL}?searchterm=${action.searchTerm}`
    );
    yield put({
      type: FETCH_TWEETS_SUCCESS,
      tweets
    });
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* watchFetchTweets() {
  yield takeLatest(FETCH_TWEETS, fetchTweets);
}

export const tweetSagas = [watchFetchTweets()];
