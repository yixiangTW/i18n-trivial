import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nProvider, i18n } from '../src/i18n';
import Language from './Language';
import App from './App';

const rootElement: any = document.getElementById('root');
const root = createRoot(rootElement);

i18n.use({
  languageOptions: {
    en: '英语',
    cn: '中文',
  },
  // initialLanguage: 'cn',
  initialNamespace: 'common',
  cache: {
    en: require('./locales/en.json'),
    cn: require('./locales/cn.json'),
  },
});

root.render(
  <I18nProvider>
    <>
      <App />
      <Language />
    </>
  </I18nProvider>,
);
