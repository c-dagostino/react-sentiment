import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { IntlProvider, addLocaleData } from 'react-intl';
import translations from '../../i18n/locales';

import App from '../App';

const entries = Object.keys(translations);
entries.forEach(translation => {
  addLocaleData(require(`react-intl/locale-data/${translation}`));
});

export class I18n extends React.Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  };

  render() {
    const { locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={translations[locale]}>
        <App />
      </IntlProvider>
    );
  }
}

export const mapStateToProps = state => ({
  locale: state.getIn(['i18n', 'locale'])
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(I18n);
