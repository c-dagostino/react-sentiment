import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';

function getWrapper(props) {
  const requiredProps = {};

  return shallow(<App {...requiredProps} {...props} />);
}

describe('App', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
