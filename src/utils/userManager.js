import { createUserManager } from 'redux-oidc';
import { WebStorageStateStore, InMemoryWebStorage } from 'oidc-client';

const {
  REACT_APP_OIDC_AUTHORITY_CLIENT_ID: clientId,
  REACT_APP_OIDC_AUTHORITY_URL: authorityUrl
} = process.env;

const userManagerConfig = {
  client_id: clientId,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/callback`,
  response_type: 'token id_token',
  scope: 'openid email name',
  authority: authorityUrl,
  silent_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
};

if (process.env.NODE_ENV === 'test') {
  const stateStoreStorage = new InMemoryWebStorage();
  const userStoreStorage = new InMemoryWebStorage();

  userManagerConfig.stateStore = new WebStorageStateStore({
    store: stateStoreStorage
  });
  userManagerConfig.userStore = new WebStorageStateStore({
    store: userStoreStorage
  });
}

// we add the localStorage so we can share the user between tabs
if (window.localStorage) {
  userManagerConfig.userStore = new WebStorageStateStore({
    store: window.localStorage
  });
}

const userManager = createUserManager(userManagerConfig);
export default userManager;
