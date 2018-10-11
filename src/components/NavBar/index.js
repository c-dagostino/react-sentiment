import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import { compose } from 'redux';
import { Link } from 'react-router-dom';

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

// TODO: move this to a separate file?
export const tabs = fromJS([
  {
    label: 'About',
    value: '/about'
  },
  {
    label: 'Public',
    value: '/public'
  },
  {
    label: 'Protected',
    value: '/protected'
  },
  {
    label: 'Saga Example',
    value: '/saga'
  },
  {
    label: 'Logout',
    value: '/logout'
  }
]);

export class NavBar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      appBar: PropTypes.string.isRequired,
      toolbarTitle: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.string.isRequired
  };

  validateValue() {
    const { value } = this.props;
    return tabs.some(tab => tab.get('value') === value) ? value : false;
  }

  generateTabList() {
    const generatedTabList = tabs.map(tab => (
      <Tab
        component={Link}
        key={tab.get('value')}
        label={tab.get('label')}
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
              variant="title"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              React Marketing Baseline Client
            </Typography>
            <Tabs value={this.validateValue()} fullWidth>
              {this.generateTabList()}
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(withStyles(styles))(NavBar);
