import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import { Auth } from 'aws-amplify';
import { LOGOUT_URL } from '../constants';

export class LogoutPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  // eslint-disable-next-line consistent-return
  componentDidMount() {
    // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
    // which means the user is signed out from all the devices
    // Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FormattedMessage
        id={'logoutPage.title'}
        defaultMessage={'[LogoutPage]'}
      />
    );
  }
}

export default withRouter(LogoutPage);
