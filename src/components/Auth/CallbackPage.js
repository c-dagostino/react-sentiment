import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import { withRouter } from 'react-router-dom';

import userManager from '../../utils/userManager';

class CallbackPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  callbackComponentSuccess = user => this.handleRedirect(user.state.referrer);

  callbackComponentError = () => this.handleRedirect('/');

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
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}
const withConnect = connect();
export default compose(
  withRouter,
  withConnect
)(CallbackPage);
