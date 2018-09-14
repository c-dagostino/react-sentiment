import React from 'react';
import { Switch, Route } from 'react-router-dom';

// oidc
import LoginPage from '../Auth/LoginPage';
import LogoutPage from '../Auth/LogoutPage';
import CallbackPage from '../Auth/CallbackPage';
import RequireAuth from '../Auth/RequireAuth';

import HomePage from '../Content/HomePage';
import SagaPage from '../SagaExample/SagaPage';

const Public = () => <h3>Public Test - No Login Required</h3>;
const Protected = () => <h3>Protected - Login Required</h3>;

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
