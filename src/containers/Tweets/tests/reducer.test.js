import { fromJS } from 'immutable';

import { GET_SAGA_TEST, SET_SAGA_TEST } from '../actions';
import sagaReducer, { initialState } from '../reducer';

describe('SagaExample.reducers', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('default with undefined state returns initialState', () => {
    const action = { type: 'test' };
    const expected = initialState;
    const result = sagaReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('default returns current state', () => {
    const action = { type: 'test' };
    const expected = state;
    const result = sagaReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('GET_SAGA_TEST sets loading = true', () => {
    const action = { type: GET_SAGA_TEST };
    const expected = state.set('loading', true);
    const result = sagaReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('SET_SAGA_TEST sets test = action.test and loading = false', () => {
    const action = { type: SET_SAGA_TEST, test: 'test value' };
    const expected = state
      .set('test', fromJS(action.test))
      .set('loading', false);
    const result = sagaReducer(state, action);
    expect(result).toEqual(expected);
  });
});
