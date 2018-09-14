import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function RequireAuth(ComposedComponent) {
  class Authentication extends React.Component {
    static propTypes = {
      isLoadingUser: PropTypes.bool.isRequired,
      user: PropTypes.object
    };

    static defaultProps = {
      user: null
    };

    render() {
      const { isLoadingUser, user } = this.props;

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
                referrer: `${window.location.pathname}${window.location.search}`
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
    isLoadingUser: state.getIn(['oidc', 'isLoadingUser']) || false
  });

  const withConnect = connect(mapStateToProps);

  return compose(withConnect)(Authentication);
}
