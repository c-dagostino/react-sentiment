import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

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

export class AboutPage extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      headerRow: PropTypes.string.isRequired
    }).isRequired
  };

  generateTable(label, rows) {
    const { classes } = this.props;
    return (
      <div>
        <Table>
          <TableBody>
            <TableRow className={classes.headerRow}>
              <TableCell>
                <Typography variant="title" color={'textSecondary'}>
                  {label}
                </Typography>
              </TableCell>
              <TableCell />
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
      const cells = entry.map((cell, i) => (
        <TableCell key={i}>{cell}</TableCell>
      ));

      return <TableRow key={entry[0]}>{cells}</TableRow>;
    });
  }

  render() {
    const {
      NODE_ENV: nodeEnvironment,
      REACT_APP_NAME: appName,
      REACT_APP_OIDC_AUTHORITY_CLIENT_ID: clientId,
      REACT_APP_OIDC_AUTHORITY_URL: authUrl
    } = environmentProperties;

    const environmentRows = {
      appName,
      nodeEnvironment,
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
          {appName}
        </Typography>
        {this.generateTable('Env Props', environmentRows)}
        {this.generateTable('About', versionRows)}
        {this.generateTable('Dependencies', packageJson.dependencies)}
        {this.generateTable('Dev Dependencies', packageJson.devDependencies)}
      </div>
    );
  }
}

export default compose(withStyles(styles))(AboutPage);
