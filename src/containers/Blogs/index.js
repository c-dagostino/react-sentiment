import * as React from 'react';
import PropTypes from 'prop-types';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation, Auth } from 'aws-amplify';
import { createBlog } from '../../graphql/mutations.ts';
import { Form } from './form';
import { Blogs } from './blog';

export default class BlogsPage extends React.Component {
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
      <div style={{ textAlign: 'center' }}>
        <Connect mutation={graphqlOperation(createBlog)}>
          {({ mutation }) => (
            <Form
              onSubmit={async input => {
                const response = await mutation({
                  input
                });
                console.log(response);
              }}
            />
          )}
        </Connect>
        <Blogs />
      </div>
    );
  }
}
