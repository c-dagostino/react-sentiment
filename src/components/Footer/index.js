import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing.unit * 6}px 0`,
    bottom: 0,
    width: '100%',
    position: 'absolute'
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
          {`© Navis Software ${new Date().getFullYear()}`}
        </Typography>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
