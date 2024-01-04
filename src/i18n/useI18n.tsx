import React from 'react';
import type { UseI18n } from './type';
import I18nContext from './I18nContext';

const useI18n: UseI18n = (namespace) => {
  const {
    t, changeLanguage, currentLanguage,
  } = React.useContext(I18nContext);
  return {
    t: (key, payload) => t(namespace, key, payload),
    changeLanguage,
    currentLanguage,
  };
};

export default useI18n;
