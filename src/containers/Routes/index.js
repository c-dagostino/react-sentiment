import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

// oidc
import LoginPage from '../../components/Auth/LoginPage';
import LogoutPage from '../../components/Auth/LogoutPage';
import CallbackPage from '../../components/Auth/CallbackPage';
import RequireAuth from '../../components/Auth/RequireAuth';

import AboutPage from '../../components/AboutPage';
import HomePage from '../../components/HomePage';
import SagaPage from '../SagaExample';

export const Public = () => (
  <h3>
    <FormattedMessage
      id={'routes.public'}
      defaultMessage={'[Public - No Login Required]'}
    />
  </h3>
);
export const Protected = () => (
  <h3>
    <FormattedMessage
      id={'routes.protected'}
      defaultMessage={'[Protected - Login Required]'}
    />
  </h3>
);

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={'/about'} component={AboutPage} />
        <Route path={'/callback'} component={CallbackPage} />
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/logout'} component={LogoutPage} />
        <Route path={'/protected'} component={RequireAuth(Protected)} />
        <Route path={'/public'} component={Public} />
        <Route path={'/saga'} component={RequireAuth(SagaPage)} />
        <Route exaxt path={'/'} component={HomePage} />
      </Switch>
    );
  }
}
