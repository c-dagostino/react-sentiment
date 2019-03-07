import React from 'react';
import { shallow } from 'enzyme';
import DropZone from 'components/DropZone';

describe('<DropZone /> component', () => {
  it('Should render without crashing', () => {
    shallow(<DropZone />);
  });

  it('Should set the given callback fot the onChange prop', () => {
    const mockedOnChange = {
      addedfile: () => {}
    };
    const wrapper = shallow(<DropZone eventHandlers={mockedOnChange} />);
    expect(wrapper.prop('eventHandlers')).toBe(mockedOnChange);
  });
});
