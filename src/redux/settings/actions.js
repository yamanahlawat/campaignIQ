import { setCurrentLanguage } from 'helpers/Utils';
import { CHANGE_LOCALE, CHANGE_ACCOUNT } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const changeLocale = (locale) => {
  setCurrentLanguage(locale);
  return {
    type: CHANGE_LOCALE,
    payload: locale,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const changeAccount = (account) => {
  return {
    type: CHANGE_ACCOUNT,
    payload: account,
  };
};
