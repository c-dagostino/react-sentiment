import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import userManager from '../../../utils/userManager';

class LoginPage extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        locale: PropTypes.string,
        referrer: PropTypes.string
      })
    })
  };

  static defaultProps = {
    location: {
      state: {
        locale: 'en',
        referrer: '/'
      }
    }
  };

  componentDidMount() {
    const locale = this.getLocale();
    const referrer = this.getReferrer();
    userManager.signinRedirect({
      data: { locale, referrer }
    });
  }

  getLocale() {
    const { location } = this.props;

    if (location && location.state && location.state.locale) {
      const { locale } = location.state;
      return locale;
    }

    return 'en';
  }

  getReferrer() {
    const { location } = this.props;

    if (location && location.state && location.state.referrer) {
      const { referrer } = location.state;
      return referrer;
    }

    return '/';
  }

  render() {
    return (
      <div>
        <h3>
          <FormattedMessage
            id={'loginPage.title'}
            defaultMessage={'[LoginPage]'}
          />
        </h3>
      </div>
    );
  }
}

export default LoginPage;
