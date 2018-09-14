import React from 'react';
import PropTypes from 'prop-types';

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

class NavBar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      appBar: PropTypes.string.isRequired,
      toolbarTitle: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.string.isRequired
  };

  render() {
    const { classes } = this.props;
    const { value } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap className={classes.toolbarTitle}>
              React Marketing Baseline Client
            </Typography>
            <Tabs
              value={value}
              fullWidth
            >
              <Tab
                label="Public"
                component={Link}
                to="/public"
                value={'/public'}
              />
              <Tab
                label="Protected"
                component={Link}
                to="/protected"
                value="/protected"
              />
              <Tab
                label="Saga Example"
                component={Link}
                to="/saga"
                value="/saga"
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
)(NavBar);
