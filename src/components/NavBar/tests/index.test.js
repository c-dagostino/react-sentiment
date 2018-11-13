import React from 'react';
import { shallow } from 'enzyme';

import { NavBar, tabs } from '../index';

function getWrapper(props) {
  const requiredProps = {
    classes: {
      appBar: 'test-app-bar',
      toolbarTitle: 'test-toolbar-title'
    },
    location: {
      pathname: '/test-pathname'
    }
  };

  return shallow(<NavBar {...requiredProps} {...props} />);
}

describe('Header', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect component to render with selected value', () => {
    const props = {
      value: tabs.first().get('value')
    };
    const wrapper = getWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });
});
