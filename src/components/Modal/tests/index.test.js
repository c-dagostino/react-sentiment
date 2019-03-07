import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactModal from 'react-modal';
import { findDOMNode } from 'react-dom';

import Modal from '../index';

describe('<Modal /> component', () => {
  it('Should render without crashing', () => {
    shallow(<Modal />);
  });

  it('Should render the content from Modal', () => {
    const mockedText = 'my modal content';
    const wrapper = mount(<Modal isOpen>{mockedText}</Modal>);
    const portalNode = findDOMNode(wrapper.find(ReactModal).node.portal);
    expect(portalNode.textContent).toEqual(mockedText);
  });

  it('Should set to zIndex the value of 1000 for overlay', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(ReactModal).prop('style').overlay).toMatchObject({
      zIndex: 1000
    });
  });

  it('Should set the position of the content div as absolute', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(ReactModal).prop('style').content).toMatchObject({
      position: 'absolute'
    });
  });

  it('Should render not Open by default', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(ReactModal).prop('isOpen')).toBeFalsy();
  });

  it('Should opens if isOpen is provided', () => {
    const wrapper = shallow(<Modal isOpen />);
    expect(wrapper.find(ReactModal).prop('isOpen')).toBeTruthy();
  });

  it('Should', () => {
    const mockedOnClose = jest.fn();
    const wrapper = shallow(<Modal onClose={mockedOnClose} />);
    wrapper.find(ReactModal).prop('onRequestClose')();
    expect(mockedOnClose).toHaveBeenCalledTimes(1);
  });
});
