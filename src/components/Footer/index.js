import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import packageJson from '../../../package.json';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

export class Footer extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      footer: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          React Marketing Baseline Client
        </Typography>
        <Typography
          variant="subheading"
          align="center"
          color="textSecondary"
          component="p"
        >
          {`Version: ${packageJson.version}`}
        </Typography>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
