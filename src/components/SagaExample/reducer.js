import { fromJS } from 'immutable';

import { GET_SAGA_TEST, SET_SAGA_TEST } from './actions';

const initialState = fromJS({
  test: 'Hello',
  loading: false
});

function sagaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SAGA_TEST:
      return state.set('loading', true);
    case SET_SAGA_TEST:
      return state
        .set('test', fromJS(action.test))
        .set('loading', false);
    default:
      return state;
  }
}

export default sagaReducer;
