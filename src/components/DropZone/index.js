import React from 'react';
import PropTypes from 'prop-types';
import DropzoneComponent from 'react-dropzone-component';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';

const DropZone = props => (
  <DropzoneComponent
    config={props.componentConfig}
    eventHandlers={props.eventHandlers}
    djsConfig={props.djsConfig}
    style={props.styles.dropZone}
  >
    <div className="dz-message">
      Drag files here to upload <br />
      <span className="dz-secondary-message">Or if you prefer...</span>
      <br />
      <span className="dz-choose-file">Choose a file</span>
    </div>
  </DropzoneComponent>
);

DropZone.propTypes = {
  componentConfig: PropTypes.object,
  styles: PropTypes.object,
  djsConfig: PropTypes.object,
  eventHandlers: PropTypes.object
};

DropZone.defaultProps = {
  componentConfig: {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: 'no-url'
  },
  styles: {
    dropZone: {
      margin: '0 auto',
      width: '80%',
      height: '200px',
      border: '1px solid black'
    }
  },
  djsConfig: {
    addRemoveLinks: true,
    autoProcessQueue: false,
    autoQueue: false,
    uploadMultiple: false,
    maxFiles: 1,
    paramName: 'image',
    acceptedFiles: 'image/jpeg,image/png,image/gif',
    previewTemplate: `
      <div class="dz-preview dz-image-preview">
        <div class="dz-image"><img data-dz-thumbnail /></div>
        <div class="dz-details">
          <div class="dz-size" data-dz-size></div>
          <div class="dz-filename"><span data-dz-name></span></div>
        </div>
        <div class="dz-success-mark"><span>✔</span></div>
          <div class="dz-error-mark"><span>✘</span></div>
          <div class="dz-error-message"><span data-dz-errormessage></span>
        </div>
      </div>`
  }
};

export default DropZone;
