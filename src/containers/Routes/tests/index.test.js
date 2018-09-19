import React from 'react';
import { shallow } from 'enzyme';

import Routes, { Public, Protected } from '../index';

function getWrapper(props) {
  return shallow(<Routes {...props} />);
}

describe('Routes', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect Public to render properly', () => {
    const wrapper = shallow(<Public />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect Protected to render properly', () => {
    const wrapper = shallow(<Protected />);
    expect(wrapper).toMatchSnapshot();
  });
});
