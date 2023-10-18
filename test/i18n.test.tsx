import i18n, { I18nFactory } from '../src/i18n/i18n';

describe('i18n', () => {
  const mockResult = {
    config: {
      initialLanguage: I18nFactory.getDefaultLan(),
      languageOptions: {
        en: '英语',
        cn: '中文',
      },
    },
  };
  it('Test i18n.use function', () => {
    expect(i18n).toBeDefined();
    expect(i18n.use({
      languageOptions: {
        en: '英语',
        cn: '中文',
      },
    })).toEqual(mockResult);
  });

  it('Test i18n.clean function', () => {
    expect(i18n.clean()).toEqual({
      config: {
        initialLanguage: I18nFactory.getDefaultLan(),
      },
    });
  });
});
