import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

export default function RequireAuth(ComposedComponent) {
  class Authentication extends React.Component {
    static propTypes = {
      locale: PropTypes.string
    };
    state = {
      userIsAuthenticated: false
    };

    static defaultProps = {
      locale: 'en',
      user: null
    };

    async componentDidMount() {
      const token = localStorage.getItem(
        'CognitoIdentityServiceProvider.17s9fcn6n7dtqkn4mqn7r7ll17.a6687381-b05a-402a-92c6-9af51510daae.accessToken'
      );
      console.log(localStorage.key(0));
      console.log('token: ' + token);
    }

    render() {
      const { locale } = this.props;
      const { userIsAuthenticated } = this.state;
      console.log(userIsAuthenticated);

      if (!userIsAuthenticated) {
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
    locale: state.getIn(['i18n', 'locale'])
  });

  const withConnect = connect(mapStateToProps);

  return compose(withConnect)(Authentication);
}
