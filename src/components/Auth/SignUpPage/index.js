import * as React from 'react';
import { Auth } from 'aws-amplify';
export default class SignUpPage extends React.Component {
  state = {
    username: '',
    password: '',
    confirmUser: false,
    signupError: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  confirm = () => {
    const { username, code } = this.state;
    // const validationData = null;
    Auth.confirmSignUp(username, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  signup = () => {
    const { username, password } = this.state;
    // const validationData = null;
    Auth.signUp({
      username,
      password
      // attributes: {
      //     email,          // optional
      //     phone_number,   // optional - E.164 number convention
      //     // other custom attributes
      // },
      // validationData: []  //optional
    })
      .then(data => this.setState({ confirmUser: true }))
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    const { confirmUser } = this.state;
    if (confirmUser) {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            this.confirm();
          }}
        >
          <h3>Confirm Credentials</h3>
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
            <span>Code:</span>
            <input
              name="code"
              placeholder="code"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Enter</button>
        </form>
      );
    }

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.signup();
        }}
      >
        <h3>Sign Up</h3>
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
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    );
  }
}
