import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import userManager from '../../utils/userManager';
import { LOGOUT_URL } from './constants';

const { REACT_APP_OIDC_AUTHORITY_URL: authorityUrl } = process.env;

class LogoutPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  async componentDidMount() {
    try {
      const user = await userManager.getUser();
      const tokenId = user.id_token;

      userManager.removeUser();
      window.location.assign(
        `${authorityUrl}${LOGOUT_URL}&id_token_hint=${tokenId}`
      );
    } catch (exception) {
      const { push } = this.props.history;
      return push('/');
    }
    return null;
  }

  render() {
    return <div>Logging out...</div>;
  }
}

export default withRouter(LogoutPage);
