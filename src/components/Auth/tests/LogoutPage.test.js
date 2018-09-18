import React from 'react';
import { shallow } from 'enzyme';
import { LogoutPage } from '../LogoutPage';
import userManager from '../../../utils/userManager';

function getWrapper(props) {
  const requiredProps = {
    history: {
      push: () => {}
    }
  };
  return shallow(<LogoutPage {...requiredProps} {...props} />);
}

describe('LogoutPage', () => {
  it('Expect component to render properly', async () => {
    const mockGetUser = jest
      .spyOn(userManager, 'getUser')
      .mockImplementation(() => Promise.resolve({ id_token: 'token-test' }));
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
    expect(mockGetUser).toHaveBeenCalled();
  });

  it('Expect component to redirect on error', async () => {
    jest.spyOn(userManager, 'getUser').mockImplementation(() => {});
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
