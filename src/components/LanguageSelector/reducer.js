import { fromJS } from 'immutable';

import { SET_LOCALE } from './actions';

export const initialState = fromJS({
  locale: 'en'
});

function languageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return state.set('locale', fromJS(action.locale));
    default:
      return state;
  }
}

export default languageReducer;
