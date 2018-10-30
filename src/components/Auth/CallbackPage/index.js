import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { CallbackComponent } from 'redux-oidc';
import { withRouter } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import userManager from '../../../utils/userManager';
import { LOGIN_ERROR_REDIRECT_PATH } from '../constants';
import { setLocale as setLocaleAction } from '../../LanguageSelector/actions';

export class CallbackPage extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    setLocale: PropTypes.func
  };

  static defaultProps = {
    setLocale: null
  };

  callbackComponentSuccess = user => {
    const { setLocale } = this.props;
    if (setLocale) {
      setLocale(user.state.locale);
    }
    return this.handleRedirect(user.state.referrer);
  };

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

const mapDispatchToProps = dispatch => ({
  setLocale: bindActionCreators(setLocaleAction, dispatch)
});

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(
  withRouter,
  withConnect
)(CallbackPage);
