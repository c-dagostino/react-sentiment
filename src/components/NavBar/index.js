import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';

import { FormattedMessage, defineMessages } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
  }
});

const messages = defineMessages({
  about: {
    id: 'nav.about',
    defaultMessage: '[About]'
  },
  public: {
    id: 'nav.public',
    defaultMessage: '[Public]'
  },
  protected: {
    id: 'nav.protected',
    defaultMessage: '[Protected]'
  },
  sagaExample: {
    id: 'nav.sagaExample',
    defaultMessage: '[Saga Example]'
  },
  logout: {
    id: 'nav.logout',
    defaultMessage: '[Logout]'
  }
});
// TODO: move this to a separate file?
export const tabs = fromJS([
  {
    id: 'about',
    value: '/about'
  },
  {
    id: 'public',
    value: '/public'
  },
  {
    id: 'protected',
    value: '/protected'
  },
  {
    id: 'sagaExample',
    value: '/saga'
  },
  {
    id: 'logout',
    value: '/logout'
  }
]);

export class NavBar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      appBar: PropTypes.string.isRequired,
      toolbarTitle: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  };

  validateValue() {
    const { location } = this.props;
    const { pathname } = location;
    return tabs.some(tab => tab.get('value') === pathname) ? pathname : false;
  }

  generateTabList() {
    const generatedTabList = tabs.map(tab => (
      <Tab
        component={Link}
        key={tab.get('id')}
        label={<FormattedMessage {...messages[tab.get('id')]} />}
        to={tab.get('value')}
        value={tab.get('value')}
      />
    ));

    return generatedTabList;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <FormattedMessage
                id={'app.name'}
                defaultMessage={'[React Marketing Baseline Client]'}
              />
            </Typography>
            <Tabs value={this.validateValue()} variant="fullWidth">
              {this.generateTabList()}
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withRouter
)(NavBar);
