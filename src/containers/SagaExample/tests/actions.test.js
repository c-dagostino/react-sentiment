import {
  GET_SAGA_TEST,
  SET_SAGA_TEST,
  getSagaTest,
  setSagaTest
} from '../actions';

describe('SagaExample actions', () => {
  it('Function getSagaTest returns expected value', () => {
    const expected = {
      type: GET_SAGA_TEST
    };
    const result = getSagaTest();
    expect(result).toEqual(expected);
  });

  it('Function setSagaTest returns expected value', () => {
    const val = 'test-value';
    const expected = {
      type: SET_SAGA_TEST,
      test: val
    };
    const result = setSagaTest(val);
    expect(result).toEqual(expected);
  });
});
