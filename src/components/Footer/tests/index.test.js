import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import { Footer } from '../index';

function getWrapper(props) {
  const requiredProps = {
    classes: {
      footer: '/test-footer'
    },
    currentYear: moment('2017-09-15 09:30:00').format('YYYY')
  };

  return shallow(<Footer {...requiredProps} {...props} />);
}

describe('Footer', () => {
  it('Expect component to render properly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
