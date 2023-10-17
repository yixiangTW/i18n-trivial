import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import withTranslation from '../src/i18n/withTranslation';
import i18n from '../src/i18n/i18n';
import I18nProvider from '../src/i18n/I18nProvider';
import type { I18nConfig } from '../src/i18n/type';

const originalConsoleWarn = console.warn;

function MockComponent(props: any) {
  const { t, fd } = props;
  return (
    <div>
      {t('city')}
      <span data-testid="date">{fd(new Date('2023 10 13 13:51:13'))}</span>
    </div>
  );
}

function setUp(props: I18nConfig) {
  const {
    languageOptions,
    initialLanguage,
    initialNamespace,
    cache,
    dateFormats,
    defaultDateFormatKey,
  } = props;
  i18n.use({
    languageOptions,
    initialLanguage,
    initialNamespace,
    cache,
    dateFormats,
    defaultDateFormatKey,
  });
}

beforeEach(() => {
  console.warn = jest.fn();
});

afterEach(() => {
  i18n.use({} as any);
  console.warn = originalConsoleWarn;
});

describe('I18nProvider', () => {
  it('Test Render I18nProvider with languageOptions is {}', () => {
    const mockCache = { languageOptions: {} };
    setUp(mockCache);
    const C = withTranslation(MockComponent);
    const { queryByText } = render(
      <I18nProvider>
        <C />
      </I18nProvider>,
    );
    expect(console.warn).toHaveBeenCalledWith('The current language is not supported');
    expect(queryByText('city')).toBeInTheDocument();
  });

  it('Test Render I18nProvider with languageOptions is undefined', () => {
    setUp({});
    const C = withTranslation(MockComponent);
    const { queryByText } = render(
      <I18nProvider>
        <C />
      </I18nProvider>,
    );
    expect(console.warn).toHaveBeenCalledWith('Please configure languageOptions when initializing i18n');
    expect(queryByText('city')).toBeInTheDocument();
  });

  it('Test Render I18nProvider with dateFormats', () => {
    setUp({
      dateFormats: {
        en: {
          other: 'MM dd, yyyy hh:mm:ss a',
        },
      },
      defaultDateFormatKey: 'other',
      initialLanguage: 'en',
    });
    const C = withTranslation(MockComponent);
    const { getByTestId } = render(
      <I18nProvider>
        <C />
      </I18nProvider>,
    );
    expect(getByTestId('date').textContent).toBe('10 13, 2023 01:51:13 PM');
  });
});
