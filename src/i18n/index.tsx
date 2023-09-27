import React from "react";
const I18nContext = React.createContext(null as any);


export const i18n: any = {
  config: {},
  use(config: any) {
    this.config = config;
    return this;
  },
};


export const I18nProvider = ({ children }: any) => {
  const {
    config: { initialLanguage, cache }
  } = i18n;

  const [currentLanguage, setCurrentLanguage] = React.useState(initialLanguage);
  const [translations, setTranslations] = React.useState({} as any);

  React.useEffect(() => {
    if (cache[currentLanguage]) {
      setTranslations(cache[currentLanguage]);
    }
  }, [currentLanguage]);
  const t = (namespace: any, key: any, payload?: any) => {
    let result: any;
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
  const changeLanguage = (lan: any) => {
    setCurrentLanguage(lan);
  };

  return (
    <I18nContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (namespace: any) => {
  const { t, changeLanguage, currentLanguage } = React.useContext(I18nContext);
  return {
    t: (key: any, payload: any) => t(namespace, key, payload),
    changeLanguage,
    currentLanguage
  };
};

export const withTranslation = (Component: any, namespace: any) => (props: any) => {
  const { t, changeLanguage, currentLanguage } = useI18n(
    namespace || i18n.config.initialNamespace
  );
  return (
    <Component
      porps={props}
      t={t}
      changeLanguage={changeLanguage}
      currentLanguage={currentLanguage}
    />
  );
};
