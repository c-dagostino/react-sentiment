import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from '../components/Header';
import Main from './Main';
import Routes from './Routes';

import theme from '../utils/theme';

export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Main>
          <Routes />
        </Main>
      </MuiThemeProvider>
    );
  }
}
