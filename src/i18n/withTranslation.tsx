import React from 'react';
import type { WithTranslation } from './type';
import i18n from './i18n';
import useI18n from './useI18n';

// eslint-disable-next-line react/display-name
const withTranslation: WithTranslation = (Component, namespace) => function (props: any) {
  const {
    t, changeLanguage, currentLanguage, fd,
  } = useI18n(
    namespace || i18n.config.initialNamespace,
  );
  return (
    <Component
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      t={t}
      changeLanguage={changeLanguage}
      currentLanguage={currentLanguage}
      fd={fd}
    />
  );
};

export default withTranslation;
