import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

// oidc
import LoginPage from '../../components/Auth/LoginPage';
import LogoutPage from '../../components/Auth/LogoutPage';
import CallbackPage from '../../components/Auth/CallbackPage';
import AboutPage from '../../components/AboutPage';
import SignUpPage from '../../components/Auth/SignUpPage';
import HomePage from '../Dashboard';
import TweetsPage from '../Tweets';
import BlogsPage from '../Blogs';
import RequireAuth from '../../components/Auth/RequireAuth';

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
        <Route path={'/signup'} component={SignUpPage} />
        <Route path={'/logout'} component={LogoutPage} />
        <Route path={'/protected'} component={Protected} />
        <Route path={'/public'} component={Public} />
        <Route path={'/saga'} component={TweetsPage} />
        <Route path={'/blogs'} component={RequireAuth(BlogsPage)} />
        <Route exaxt path={'/'} component={HomePage} />
      </Switch>
    );
  }
}
