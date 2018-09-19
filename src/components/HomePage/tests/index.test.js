import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../index';

function getWrapper(props) {
  return shallow(<HomePage {...props} />);
}

describe('HomePage', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
