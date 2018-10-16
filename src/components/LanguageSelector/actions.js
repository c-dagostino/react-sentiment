export const GET_LOCALE = 'GET_LOCALE';
export const SET_LOCALE = 'SET_LOCALE';

export function getLocale() {
  return {
    type: GET_LOCALE
  };
}

export function setLocale(locale) {
  return {
    type: SET_LOCALE,
    locale
  };
}
