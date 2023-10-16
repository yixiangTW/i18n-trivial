import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import withTranslation from '../src/i18n/withTranslation';
import i18n from '../src/i18n/i18n';
import I18nProvider from '../src/i18n/I18nProvider';

function MockComponent(props: any) {
  const { t } = props;
  return (
    <div>
      {t('city')}
    </div>
  );
}

function setUp(cache: any, initialLanguage: string) {
  i18n.use({
    languageOptions: {
      en: '英语',
      cn: '中文',
    },
    initialLanguage,
    initialNamespace: undefined,
    cache,
  });
}

afterEach(() => {
  i18n.use({} as any);
});

describe('withTranslation', () => {
  it('Test withTranslation without namespace', () => {
    const mockCache = {
      en: {
        city: 'This is a city',
      },
    };
    setUp(mockCache, 'en');
    const C = withTranslation(MockComponent);
    const { queryByText } = render(<I18nProvider><C /></I18nProvider>);
    expect(queryByText(mockCache.en.city)).toBeInTheDocument();
  });

  it('Test withTranslation with namespace is common', () => {
    const mockCache = {
      en: {
        common: {
          city: 'This is a city',
        },
      },
    };
    setUp(mockCache, 'en');
    const C = withTranslation(MockComponent, 'common');
    const { queryByText } = render(<I18nProvider><C /></I18nProvider>);
    expect(queryByText(mockCache.en.common.city)).toBeInTheDocument();
  });

  it('Test withTranslation with namespace is detail but source is incorrect', () => {
    const mockCache = {
      en: {
        common: {
          city: 'This is a city',
        },
        detail: {
          city: 'This is a new city',
        },
      },
    };
    setUp(mockCache, 'en');
    const C = withTranslation(MockComponent, 'detail');
    const { queryByText } = render(<I18nProvider><C /></I18nProvider>);
    expect(queryByText(mockCache.en.common.city)).not.toBeInTheDocument();
    expect(queryByText(mockCache.en.detail.city)).toBeInTheDocument();
  });
});
