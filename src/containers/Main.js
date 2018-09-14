import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  }
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>{this.props.children}</Paper>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
