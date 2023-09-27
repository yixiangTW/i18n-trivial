import React from "react";

import { I18n, Config, T, ChangeLanguage, UseI18n, WithTranslation } from './type'

const I18nContext = React.createContext({} as any);


export const i18n: I18n = {
  config: {} as Config,
  use(config: any) {
    this.config = config;
    return this;
  },
};


export const I18nProvider = ({ children }: { children: JSX.Element}) => {
  const {
    config: { initialLanguage, cache }
  } = i18n;

  const [currentLanguage, setCurrentLanguage] = React.useState<string>(initialLanguage);
  const [translations, setTranslations] = React.useState({} as any);

  React.useEffect(() => {
    if (cache[currentLanguage]) {
      setTranslations(cache[currentLanguage]);
    }
  }, [currentLanguage]);
  const t: T = (namespace, key, payload) => {
    let result: string;
    if (typeof namespace !== "undefined") {
      if (translations[namespace] && translations[namespace][key]) {
        result = translations[namespace][key];
      } else {
        result = key;
      }
    } else {
      result = translations[key] || key;
    }
    if (typeof payload !== "undefined") {
      Object.keys(payload).map((key) => {
        return (result = result.replace(`{${key}}`, payload[key]));
      });
      return result;
    }

    return result;
  };
  const changeLanguage: ChangeLanguage = (lan) => {
    setCurrentLanguage(lan);
  };

  return (
    <I18nContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n: UseI18n = (namespace) => {
  const { t, changeLanguage, currentLanguage } = React.useContext(I18nContext);
  return {
    t: (key, payload) => t(namespace, key, payload),
    changeLanguage,
    currentLanguage
  };
};

export const withTranslation: WithTranslation = (Component: any, namespace) => (props: any) => {
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
