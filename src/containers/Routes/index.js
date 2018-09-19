import React from 'react';
import { Switch, Route } from 'react-router-dom';

// oidc
import LoginPage from '../../components/Auth/LoginPage';
import LogoutPage from '../../components/Auth/LogoutPage';
import CallbackPage from '../../components/Auth/CallbackPage';
import RequireAuth from '../../components/Auth/RequireAuth';

import HomePage from '../../components/HomePage';
import SagaPage from '../SagaExample';

export const Public = () => <h3>Public Test - No Login Required</h3>;
export const Protected = () => <h3>Protected - Login Required</h3>;

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/logout'} component={LogoutPage} />
        <Route path={'/callback'} component={CallbackPage} />
        <Route path={'/public'} component={Public} />
        <Route path={'/protected'} component={RequireAuth(Protected)} />
        <Route path={'/saga'} component={RequireAuth(SagaPage)} />
        <Route exaxt path={'/'} component={HomePage} />
      </Switch>
    );
  }
}
