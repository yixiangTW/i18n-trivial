import React from 'react';
import type { WithTranslation } from './type';
import i18n from './i18n';
import useI18n from './useI18n';

const withTranslation: WithTranslation = (Component, namespace) => function NC(props: any) {
  const {
    t, changeLanguage, currentLanguage,
  } = useI18n(
    namespace || i18n.config.initialNamespace,
  );
  return (
    <Component
      {...props}
      t={t}
      changeLanguage={changeLanguage}
      currentLanguage={currentLanguage}
    />
  );
};

export default withTranslation;
