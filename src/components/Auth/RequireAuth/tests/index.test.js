import React from 'react';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import RequireAuth from '../index';

class MockComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return <div>MockComponent</div>;
  }
}

function getWrapper(initialState) {
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const WrappedComponent = RequireAuth(MockComponent);
  return shallow(<WrappedComponent store={store} />);
}

describe('RequireAuth', () => {
  it('Expect RequireAuth to render properly', () => {
    const initialState = fromJS({
      oidc: {
        user: { name: 'Test User' }
      }
    });
    const wrapper = getWrapper(initialState);
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect RequireAuth to render properly when user is loading', () => {
    const initialState = fromJS({
      oidc: {
        isLoadingUser: true
      }
    });
    const wrapper = getWrapper(initialState);
    const childComponent = wrapper.dive();
    expect(childComponent).toMatchSnapshot();
    expect(childComponent.type()).toEqual(null);
  });

  it('Expect RequireAuth to return component', () => {
    const initialState = fromJS({
      oidc: {
        user: {
          name: 'test'
        }
      }
    });
    const wrapper = getWrapper(initialState);
    const childComponent = wrapper.dive();
    expect(childComponent).toMatchSnapshot();
    expect(childComponent.type()).toEqual(MockComponent);
  });

  it('Expect Authentication to render Redirect', () => {
    const initialState = fromJS({});
    const wrapper = getWrapper(initialState);
    wrapper.setProps({
      location: {
        pathname: '/test',
        search: '?test=helloworld'
      }
    });
    const childComponent = wrapper.dive();
    expect(childComponent).toMatchSnapshot();
  });
});
