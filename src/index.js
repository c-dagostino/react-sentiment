import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';

import store from './store';
import userManager from './utils/userManager';

import './index.css';
import I18n from './containers/I18n';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <I18n />
    </OidcProvider>
  </Provider>,
  window.document.getElementById('root')
);
registerServiceWorker();
