import { getCurrentLanguage } from 'helpers/Utils';
import { CHANGE_LOCALE, CHANGE_ACCOUNT } from '../constants';

const INIT_STATE = {
  locale: getCurrentLanguage(),
  account: 'dropbox',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload };
    case CHANGE_ACCOUNT:
      return { ...state, account: action.payload };
    default:
      return { ...state };
  }
};
