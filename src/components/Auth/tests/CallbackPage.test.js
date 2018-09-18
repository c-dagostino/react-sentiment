import React from 'react';
import { shallow } from 'enzyme';

import { CallbackPage } from '../CallbackPage';
import { LOGIN_ERROR_REDIRECT_PATH } from '../constants';

function getWrapper(props) {
  const requiredProps = {
    history: {
      push: () => {}
    }
  };
  return shallow(<CallbackPage {...requiredProps} {...props} />);
}

describe('CallbackPage', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect callbackComponentSuccess to redirect to user.state.referrer', () => {
    const mockedPush = jest.fn();
    const history = {
      push: mockedPush
    };
    const user = {
      state: {
        referrer: '/test-referrer'
      }
    };
    const wrapper = getWrapper({ history });
    wrapper.instance().callbackComponentSuccess(user);
    expect(mockedPush).toHaveBeenCalledWith(user.state.referrer);
  });

  it('Expect callbackComponentError to redirect to LOGIN_ERROR_REDIRECT_PATH', () => {
    const mockedPush = jest.fn();
    const history = {
      push: mockedPush
    };
    const wrapper = getWrapper({ history });
    wrapper.instance().callbackComponentError();
    expect(mockedPush).toHaveBeenCalledWith(LOGIN_ERROR_REDIRECT_PATH);
  });
});
