import { combineReducers } from 'redux-immutable';
import { immutableReducer as oidcReducer } from 'redux-oidc';

import sagaReducer from './containers/SagaExample/reducer';

const reducers = combineReducers({
  saga: sagaReducer,
  oidc: oidcReducer
});

export default reducers;
