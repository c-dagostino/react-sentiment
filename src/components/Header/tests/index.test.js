import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

function getWrapper(props) {
  const requiredProps = {};

  return shallow(<Header {...requiredProps} {...props} />);
}

describe('Header', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
