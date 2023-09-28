import { WithTranslation } from './type'
import i18n from './i18n'
import useI18n from './useI18n'
import React from 'react';

const withTranslation: WithTranslation = (Component: any, namespace) => (props: any) => {
  const { t, changeLanguage, currentLanguage } = useI18n(
    namespace || i18n.config.initialNamespace
  );
  return (
    <Component
      props={props}
      t={t}
      changeLanguage={changeLanguage}
      currentLanguage={currentLanguage}
    />
  );
};

export default withTranslation
