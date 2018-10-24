import React from 'react';
import PropTypes from 'prop-types';

import { FormattedDate } from 'react-intl';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import LanguageSelector from '../LanguageSelector';

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
    }).isRequired,
    currentYear: PropTypes.string
  };

  static defaultProps = {
    currentYear: moment().format('YYYY')
  };

  render() {
    const { classes, currentYear } = this.props;
    return (
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          {`© Navis Software ${currentYear}`}
        </Typography>
        <Typography variant="title" align="center" gutterBottom>
          <FormattedDate value={currentYear} />
        </Typography>
        <LanguageSelector />
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
