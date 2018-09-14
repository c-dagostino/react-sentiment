export const GET_SAGA_TEST = 'SAGA_TEST';
export const SET_SAGA_TEST = 'SET_SAGA_TEST';

export function getSagaTest() {
  return {
    type: GET_SAGA_TEST
  };
}

export function setSagaTest(val) {
  return {
    type: SET_SAGA_TEST,
    test: val
  };
}
