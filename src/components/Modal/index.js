import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

class Modal extends React.PureComponent {
  componentWillMount() {
    ReactModal.setAppElement('#app');
  }

  render() {
    const isOpen = this.props.isOpen === true;

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel={this.props.contentLabel}
        onRequestClose={this.props.onClose}
        shouldCloseOnOverlayClick={false}
        ariaHideApp
        style={{
          overlay: {
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.54)'
          },
          content: {
            position: 'absolute',
            width: this.props.width,
            height: this.props.height,
            left: this.props.left,
            top: this.props.top,
            padding: this.props.padding,
            borderRadius: this.props.borderRadius,
            rowStyle: this.props.rowStyle,
            rowItemStyle: this.props.rowItemStyle,
            transform: `translate(-${this.props.left}, -${this.props.top})`
          }
        }}
      >
        {this.props.children}
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  contentLabel: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.any,
  top: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  rowStyle: PropTypes.string,
  rowItemStyle: PropTypes.string
};

Modal.defaultProps = {
  isOpen: false,
  contentLabel: '',
  height: '250px',
  width: '600px',
  top: '50%',
  left: '50%',
  borderRadius: '2px',
  onClose: null,
  children: null,
  padding: null,
  rowStyle: null,
  rowItemStyle: null
};

export default Modal;
