import * as React from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { FormattedMessage } from 'react-intl';

export default class LoginPage extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  state = {
    username: '',
    password: ''
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  login = () => {
    const { username, password } = this.state;
    const validationData = null;
    Auth.signIn({
      username, // Required, the username
      password, // Optional, the password
      validationData // Optional, a random key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication
    })
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.login();
          }}
        >
          <h3>
            <FormattedMessage
              id={'loginPage.title'}
              defaultMessage={'[LoginPage]'}
            />
          </h3>
          <div>
            <span>Username:</span>
            <input
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <span>Password:</span>
            <input
              name="password"
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Enter</button>
        </form>
        <div>
          Not a member yet?{' '}
          <a href="/signup" title="Sign Up Now">
            Sign Up Now
          </a>{' '}
        </div>
      </div>
    );
  }
}
