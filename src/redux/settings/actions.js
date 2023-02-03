import { setCurrentLanguage } from 'helpers/Utils';
import { CHANGE_LOCALE } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const changeLocale = (locale) => {
  setCurrentLanguage(locale);
  return {
    type: CHANGE_LOCALE,
    payload: locale,
  };
};
