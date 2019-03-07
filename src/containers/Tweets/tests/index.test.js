import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';

import { SagaPage, mapStateToProps, mapDispatchToProps } from '../index';

import * as actions from '../actions';

function getWrapper(props) {
  const requiredProps = {
    getSagaTest: () => {}
  };

  return shallow(<SagaPage {...requiredProps} {...props} />);
}

describe('SagaPage', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect button to dispatch getSagaTest action', () => {
    const props = {
      getSagaTest: jest.fn()
    };
    const wrapper = getWrapper(props);
    wrapper.find('[data-id="sagaTestButton"]').simulate('click', {
      preventDefault: () => {}
    });
    expect(props.getSagaTest).toHaveBeenCalled();
  });
});

describe('SagaPage mapStateToProps', () => {
  let state = {};
  beforeEach(() => {
    const saga = {
      test: 'saga-test'
    };

    state = fromJS(saga);
  });

  it('Expect sagaTest to be populated from state', () => {
    const result = mapStateToProps(state).sagaTest;
    expect(result).toBe(state.getIn(['saga', 'test']));
  });
});

describe('SagaPage mapDispatchToProps', () => {
  it('Expect mapDispatchToProps to dispatch getSagaTest', () => {
    const mockAction = jest.spyOn(actions, 'getSagaTest');
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getSagaTest();
    expect(mockAction).toHaveBeenCalled();
  });
});
