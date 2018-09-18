import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../LoginPage';

jest.mock('redux-oidc', () => ({
  createUserManager: () => ({ signinRedirect: jest.fn() })
}));

function getWrapper(props) {
  return shallow(<LoginPage {...props} />);
}

describe('LoginPage', () => {
  beforeEach(() => {
    window.location.assign = jest.fn();
  });

  it('Expect LoginPage to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect LoginPage to render properly with missing location.state.referrer', () => {
    const location = {
      state: {
        referrer: null
      }
    };
    const wrapper = getWrapper({ location });
    expect(wrapper).toMatchSnapshot();
  });
});
