import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';

class Header extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  getLocation() {
    const { history } = this.props;
    if (
      history &&
      history.location &&
      history.location.pathname &&
      history.location.pathname !== '/callback'
    ) {
      return history.location.pathname;
    }

    return '/';
  }

  render() {
    return (
      <div>
        <NavBar value={this.getLocation()} />
      </div>
    );
  }
}

export default withRouter(Header);
