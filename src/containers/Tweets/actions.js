import Log from '../../utils/Log';
import { FETCH_TWEETS, FETCH_TWEETS_SUCCESS } from '../App/constants';

export function fetchTweets(searchTerm) {
  Log.trace('fetchTweets', 'Tweets actions');

  return {
    type: FETCH_TWEETS,
    searchTerm
  };
}

export function fetchTweetsSuccess(tweets) {
  Log.trace('fetchTweetsSuccess', 'Tweets actions');
  return {
    type: FETCH_TWEETS_SUCCESS,
    tweets
  };
}
