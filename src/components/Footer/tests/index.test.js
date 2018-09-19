import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '../index';

function getWrapper(props) {
  const requiredProps = {
    classes: {
      footer: '/test-footer'
    }
  };

  return shallow(<Footer {...requiredProps} {...props} />);
}

describe('Footer', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
