import { combineReducers } from 'redux-immutable';
import languageReducer from './components/LanguageSelector/reducer';
import tweetsReducer from './containers/Tweets/reducer';

const reducers = combineReducers({
  i18n: languageReducer,
  tweets: tweetsReducer
});

export default reducers;
