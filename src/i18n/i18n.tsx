import type { I18nConfig, I18n } from './type';

class I18nFactory {
  config: Readonly<I18nConfig> = {};

  use(config: I18nConfig) {
    this.clean();
    this.config = { ...this.config, ...config };
    return this;
  }

  static getDefaultLan() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || navigator.language.toLowerCase();
  }

  clean() {
    this.config = {
      initialLanguage: I18nFactory.getDefaultLan(),
    };
  }
}

const i18n: I18n = new I18nFactory();

export default i18n;
