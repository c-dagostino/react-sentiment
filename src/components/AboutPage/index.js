import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { FormattedMessage, defineMessages } from 'react-intl';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import packageJson from '../../../package.json';

const environmentProperties = process.env;

const styles = theme => ({
  headerRow: {
    backgroundColor: theme.palette.secondary.light
  }
});

const messages = defineMessages({
  envProps: {
    id: 'about.envProps',
    defaultMessage: '[Env Props]'
  },
  about: {
    id: 'about.about',
    defaultMessage: '[About]'
  },
  dependencies: {
    id: 'about.dependencies',
    defaultMessage: '[Dependencies]'
  },
  devDependencies: {
    id: 'about.devDependencies',
    defaultMessage: '[Dev Dependencies]'
  }
});

export class AboutPage extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      headerRow: PropTypes.string.isRequired
    }).isRequired
  };

  generateTable(key, rows) {
    const { classes } = this.props;
    return (
      <div>
        <Table>
          <TableBody>
            <TableRow key={'headerRow'} className={classes.headerRow}>
              <TableCell key={'headerTitleCell'}>
                <Typography variant="title" color={'textSecondary'}>
                  <FormattedMessage {...messages[key]} />
                </Typography>
              </TableCell>
              <TableCell key={'emptyHeaderCell'} />
            </TableRow>
            {this.generateRows(rows)}
          </TableBody>
        </Table>
      </div>
    );
  }

  generateRows(rows) {
    const entries = Object.entries(rows);
    return entries.map(entry => {
      const cells = entry.map((cell, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableCell key={index}>{cell}</TableCell>
      ));

      return <TableRow key={entry[0]}>{cells}</TableRow>;
    });
  }

  render() {
    const {
      NODE_ENV: nodeEnvironment,
      REACT_APP_ENV: reactEnvironment,
      REACT_APP_NAME: appName,
      REACT_APP_ID: appId,
      REACT_APP_OIDC_AUTHORITY_CLIENT_ID: clientId,
      REACT_APP_OIDC_AUTHORITY_URL: authUrl,
      REACT_APP_SHOW_LANGUAGE_SELECTOR: showLanguageSelector,
      REACT_APP_ENABLE_DEBUG_LOGGING: enableDebugLogging
    } = environmentProperties;

    const environmentRows = {
      appName,
      appId,
      nodeEnvironment,
      showLanguageSelector,
      reactEnvironment,
      enableDebugLogging,
      clientId,
      authUrl
    };

    const versionRows = {
      name: packageJson.name,
      version: packageJson.version
    };

    return (
      <div>
        <Typography variant="title" align="center" gutterBottom>
          <FormattedMessage
            id={'app.name'}
            default={'[React Marketing Baseline Client]'}
          />
        </Typography>
        {this.generateTable('envProps', environmentRows)}
        {this.generateTable('about', versionRows)}
        {this.generateTable('dependencies', packageJson.dependencies)}
        {this.generateTable('devDependencies', packageJson.devDependencies)}
      </div>
    );
  }
}

export default compose(withStyles(styles))(AboutPage);
