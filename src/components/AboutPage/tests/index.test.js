import React from 'react';
import { shallow } from 'enzyme';

import DefaultAboutPage, { AboutPage } from '../index';

function getWrapper(props) {
  const requiredProps = {
    classes: {
      headerRow: 'test-header-row'
    }
  };

  return shallow(<AboutPage {...requiredProps} {...props} />);
}

describe('AboutPage', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('DefaultAboutPage', () => {
  it('Expect component to render properly', () => {
    const wrapper = shallow(<DefaultAboutPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
