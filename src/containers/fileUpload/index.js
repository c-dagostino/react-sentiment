import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Loader from 'components/Loader';
import DropZone from '../../components/DropZone';
import Modal from '../../components/Modal';

class FileUpload extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      file: null,
      isValid: false,
      isMaxFilesExceeded: false,
      dropzone: null
    };

    this.onChangeFileName = this.onChangeFileName.bind(this);
    this.onChangeFileDescription = this.onChangeFileDescription.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.eventHandlers = {
      addedfile: file => {
        this.addedFileEventHandler(file);
      },
      init: dropzone => {
        this.setState({ dropzone });
        dropzone.on('maxfilesexceeded', file => {
          alert('Only one file is allowed.'); // eslint-disable-line no-alert
          this.setState({ isMaxFilesExceeded: true });
          dropzone.removeFile(file);
        });
      },
      removedfile: () => {
        this.removedFileEventHandler();
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isModalOpen === false && nextProps.isModalOpen) {
      this.setState({ fileName: '', file: null });
    }
  }

  onCancel(event) {
    this.setState({ file: null, isValid: false });
    this.props.onCancelAndCloseModal(event);
  }

  onChangeFileName(event) {
    const fileName = event.target.value;
    this.setState({
      isValid: fileName.trim() !== '',
      fileName
    });
  }

  onConfirm() {
    this.props.onConfirmUpload(this.state.file, this.state.fileName);
    this.setState({ fileName: '' });
  }

  addedFileEventHandler(file) {
    if (!this.state.file) {
      const fileSizeInMegabytes = file.size / 1000000;
      if (fileSizeInMegabytes > 2) {
        this.state.dropzone.removeFile(file);
        this.setState({ file: null });
        // Set validation
      } else {
        this.setState({ file });
      }
    }
  }

  removedFileEventHandler() {
    if (!this.state.isMaxFilesExceeded) {
      this.setState({ file: null });
    } else {
      this.setState({ isMaxFilesExceeded: false });
    }
  }

  isButtonDisabled() {
    return this.props.blocked || !this.state.isValid || !this.state.file;
  }

  render() {
    const styles = {
      modalHeight: '570px',
      modalPadding: '0px',
      modalWidth: '500px',
      rowStyle: { display: 'flex', margin: 8, flexDirection: 'row' },
      rowButtonStyle: { float: 'right', marginTop: '70px', marginRight: '3px' },
      rowItemStyle: { marginRight: 10, width: '466px' },
      headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingTop: '13px',
        marginBottom: '-7px',
        width: '100%',
        textAlign: 'center'
      },
      bodyStyle: { padding: '20px', width: '100%' }
    };

    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onClose={this.props.onCancelAndCloseModal}
        height={styles.modalHeight}
        padding={styles.modalPadding}
        width={styles.modalWidth}
        shouldCloseOnOverlayClick={false}
      >
        <div style={styles.headerStyle}>Upload a file</div>
      </Modal>
    );
  }
}

FileUpload.propTypes = {
  isModalOpen: PropTypes.bool,
  onCancelAndCloseModal: PropTypes.func,
  onConfirmUpload: PropTypes.func,
  blocked: PropTypes.bool.isRequired
};

FileUpload.defaultProps = {
  onConfirmUpload: null,
  onCancelAndCloseModal: null,
  isModalOpen: false
};

export default FileUpload;
