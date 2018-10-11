import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Routes from '../../containers/Routes';

import theme from '../../utils/theme';

const stickyFooter = {
  boxSizing: 'border-box',
  minHeight: '100%',
  paddingBottom: '100px',
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
