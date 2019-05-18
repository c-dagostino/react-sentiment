import * as React from 'react';
import PropTypes from 'prop-types';

export class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  state = {
    name: ''
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form
        onSubmit={async e => {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }}
      >
        <h3>Create Blog</h3>
        <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">save</button>
      </form>
    );
  }
}
