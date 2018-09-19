import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Routes from '../../containers/Routes';

import theme from '../../utils/theme';

const stickyFooter = {
  height: '100%',
  boxSizing: 'border-box',
  marginBottom: '-150px'
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
