import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function RequireAuth(ComposedComponent) {
  class Authentication extends React.Component {
    static propTypes = {
      isLoadingUser: PropTypes.bool.isRequired,
      locale: PropTypes.string,
      user: PropTypes.object
    };

    static defaultProps = {
      locale: 'en',
      user: null
    };

    render() {
      const { isLoadingUser, locale, user } = this.props;

      if (isLoadingUser) {
        return null;
      }

      if (!user && !isLoadingUser) {
        return (
          <Redirect
            push
            to={{
              pathname: '/login',
              state: {
                referrer: `${window.location.pathname}${
                  window.location.search
                }`,
                locale
              }
            }}
          />
        );
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    user: state.getIn(['oidc', 'user']),
    isLoadingUser: state.getIn(['oidc', 'isLoadingUser']) || false,
    locale: state.getIn(['i18n', 'locale'])
  });

  const withConnect = connect(mapStateToProps);

  return compose(withConnect)(Authentication);
}
