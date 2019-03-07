import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: '95%',
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
  static propTypes = {
    classes: PropTypes.shape({
      layout: PropTypes.string.isRequired,
      paper: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.layout}>
        <Paper className={classes.paper}>{this.props.children}</Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Main);
