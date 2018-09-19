import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../../components/Layout/index';

export default class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Router>
          <Layout />
        </Router>
      </CssBaseline>
    );
  }
}
