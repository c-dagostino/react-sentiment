import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../index';

function getWrapper(props) {
  const requiredProps = {
    history: {
      location: {
        pathname: '/test-pathname'
      }
    }
  };

  return shallow(<Header {...requiredProps} {...props} />);
}

describe('Header', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect getLocation to return /', () => {
    const props = {
      history: {
        location: {
          pathname: '/CALLBACK'
        }
      }
    };

    const wrapper = getWrapper(props);
    const expected = '/';

    const result = wrapper.instance().getLocation();
    expect(result).toBe(expected);
  });
});
