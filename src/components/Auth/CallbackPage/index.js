import React from 'react';
import PropTypes from 'prop-types';

import { CallbackComponent } from 'redux-oidc';
import { withRouter } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import userManager from '../../../utils/userManager';
import { LOGIN_ERROR_REDIRECT_PATH } from '../constants';

export class CallbackPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  callbackComponentSuccess = user => this.handleRedirect(user.state.referrer);

  callbackComponentError = () => this.handleRedirect(LOGIN_ERROR_REDIRECT_PATH);

  handleRedirect(referrer) {
    const { push } = this.props.history;
    return push(referrer);
  }

  render() {
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={this.callbackComponentSuccess}
        errorCallback={this.callbackComponentError}
      >
        <FormattedMessage
          id={'callbackPage.redirecting'}
          defaultMessage={'[Redirecting...]'}
        />
      </CallbackComponent>
    );
  }
}
export default withRouter(CallbackPage);
