import { fromJS } from 'immutable';

import Log from '../../utils/Log';
import { GET_SAGA_TEST, SET_SAGA_TEST } from './actions';

export const initialState = fromJS({
  test: 'Hello',
  loading: false
});

function sagaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAGA_TEST:
      Log.trace('GET_SAGA_TEST: loading set to true', 'SagaExample reducer');
      return state.set('loading', true);
    case SET_SAGA_TEST:
      Log.trace('GET_SAGA_TEST: loading set to false', 'SagaExample reducer');
      Log.trace(
        `GET_SAGA_TEST: test set to ${action.test}`,
        'SagaExample reducer'
      );
      return state.set('test', fromJS(action.test)).set('loading', false);
    default:
      return state;
  }
}

export default sagaReducer;
