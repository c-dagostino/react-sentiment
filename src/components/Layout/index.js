import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Routes from '../../containers/Routes';

import theme from '../../utils/theme';

const { REACT_APP_SHOW_LANGUAGE_SELECTOR: showLanguageSelector } = process.env;

const stickyFooter = {
  boxSizing: 'border-box',
  minHeight: '100%',
  paddingBottom: showLanguageSelector === 'true' ? ' 200px' : '120px',
  position: 'relative'
};

export default class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={stickyFooter}>
          <Header />
          <Main>
            <Routes />
          </Main>
        </div>
        <Footer />
      </MuiThemeProvider>
    );
  }
}
