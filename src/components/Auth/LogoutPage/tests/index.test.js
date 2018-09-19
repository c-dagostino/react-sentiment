import React from 'react';
import { shallow } from 'enzyme';
import { LogoutPage } from '../index';
import userManager from '../../../../utils/userManager';

function getWrapper(props) {
  const requiredProps = {
    history: {
      push: () => {}
    }
  };
  return shallow(<LogoutPage {...requiredProps} {...props} />);
}

describe('LogoutPage', async () => {
  let mockGetUser;
  const getUserResult = { id_token: 'token-test' };

  let mockRemoveUser;
  const removeUserResult = {};
  beforeEach(() => {
    mockGetUser = jest
      .spyOn(userManager, 'getUser')
      .mockImplementation(() => Promise.resolve(getUserResult));

    mockRemoveUser = jest
      .spyOn(userManager, 'removeUser')
      .mockImplementation(() => Promise.resolve(removeUserResult));
  });

  it('Expect component to render properly', async () => {
    window.location.assign = jest.fn();
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
    expect(mockGetUser).toHaveBeenCalled();
    await expect(userManager.getUser()).resolves.toBe(getUserResult);
    expect(mockRemoveUser).toHaveBeenCalled();
    await expect(userManager.removeUser()).resolves.toBe(removeUserResult);
    expect(window.location.assign).toHaveBeenCalled();
  });

  it('Expect component to redirect on error', async () => {
    mockGetUser = jest.spyOn(userManager, 'getUser').mockImplementation(() => {
      throw new Error('test error');
    });

    const props = {
      history: {
        push: jest.fn()
      }
    };
    const wrapper = getWrapper(props);
    expect(wrapper).toMatchSnapshot();
    expect(props.history.push).toHaveBeenCalled();
  });
});
