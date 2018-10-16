import { combineReducers } from 'redux-immutable';
import { immutableReducer as oidcReducer } from 'redux-oidc';

import languageReducer from './components/LanguageSelector/reducer';
import sagaReducer from './containers/SagaExample/reducer';

const reducers = combineReducers({
  i18n: languageReducer,
  oidc: oidcReducer,
  saga: sagaReducer
});

export default reducers;
