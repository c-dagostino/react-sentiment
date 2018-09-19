import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../index';
import userManager from '../../../../utils/userManager';

function getWrapper(props) {
  return shallow(<LoginPage {...props} />);
}

describe('LoginPage', () => {
  let mockSigninRedirect;
  beforeEach(() => {
    mockSigninRedirect = jest
      .spyOn(userManager, 'signinRedirect')
      .mockImplementation(() => jest.fn());
  });

  it('Expect LoginPage to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
    expect(mockSigninRedirect).toHaveBeenCalled();
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
