import React from 'react';
import i18n from './i18n';
import I18nContext from './I18nContext';
import translate from './translate';
import type { ChangeLanguageFunction } from './type';

function I18nProvider({ children }: { children: JSX.Element }) {
  const {
    config: {
      initialLanguage, cache, languageOptions,
    },
  } = i18n;

  const [currentLanguage, setCurrentLanguage] = React.useState(() => {
    if (languageOptions) {
      const lan = Object.keys(languageOptions).find(
        (languageKey) => (initialLanguage as string).indexOf(languageKey) !== -1,
      );
      if (lan) {
        i18n.config.initialLanguage = lan;
        return lan;
      }
      console.warn('The current language is not supported');
    }
    console.warn('Please configure languageOptions when initializing i18n');
    return (initialLanguage);
  });
  const [translations, setTranslations] = React.useState({});

  React.useEffect(() => {
    if (!currentLanguage) {
      return;
    }
    if (cache && cache[currentLanguage]) {
      setTranslations(cache[currentLanguage]);
    }
  }, [currentLanguage]);

  const t = translate(translations);
  const changeLanguage: ChangeLanguageFunction = (lan) => {
    setCurrentLanguage(lan);
  };

  return (
    <I18nContext.Provider value={{
      t, changeLanguage, currentLanguage,
    }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export default I18nProvider;
