import Log from '../../utils/Log';

export const GET_SAGA_TEST = 'SAGA_TEST';
export const SET_SAGA_TEST = 'SET_SAGA_TEST';

export function getSagaTest() {
  Log.trace('getSagaTest', 'SagaExample actions');
  return {
    type: GET_SAGA_TEST
  };
}

export function setSagaTest(val) {
  Log.trace('setSagaTest', 'SagaExample actions');
  return {
    type: SET_SAGA_TEST,
    test: val
  };
}
