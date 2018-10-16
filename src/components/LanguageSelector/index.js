import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { FormattedMessage, defineMessages } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { setLocale as setLocaleAction } from './actions';
import supportedLanguages from '../../utils/supportedLanguages';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 360,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
  }
});

const messages = defineMessages({
  en: {
    id: 'en.label',
    defaultMessage: '[English]'
  },
  es: {
    id: 'es.label',
    defaultMessage: '[Spanish]'
  }
});

export class LanguageSelector extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string.isRequired
    }).isRequired,
    locale: PropTypes.string.isRequired,
    setLocale: PropTypes.func.isRequired
  };

  state = {
    anchorEl: null
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, key) => {
    const { setLocale } = this.props;
    setLocale(key);
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, locale } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Language"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary={
                <FormattedMessage
                  id={'language'}
                  defaultMessage={'[Language]'}
                />
              }
              secondary={<FormattedMessage {...messages[locale]} />}
            />
          </ListItem>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {supportedLanguages.map(key => (
            <MenuItem
              key={supportedLanguages[key]}
              onClick={event => this.handleMenuItemClick(event, key)}
            >
              <FormattedMessage {...messages[key]} />
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.getIn(['i18n', 'locale'])
});

const mapDispatchToProps = dispatch => ({
  setLocale: bindActionCreators(setLocaleAction, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(LanguageSelector);
