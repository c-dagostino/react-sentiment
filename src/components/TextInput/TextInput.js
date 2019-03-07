import PropTypes from 'prop-types';
import React from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  const lblStyle = {
    paddingLeft: '10px'
  };

  return (
    <span className={wrapperClass}>
      <label id="lblName" htmlFor={name}>
        {label}
        <span className="field" style={lblStyle}>
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {error && <div className="alert alert-danger">{error}</div>}
        </span>
      </label>
    </span>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: '',
  value: '',
  error: ','
};

export default TextInput;
