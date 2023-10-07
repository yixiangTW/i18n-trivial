import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import i18n from '../i18n/i18n'
import I18nProvider from '../i18n/I18nProvider'
import { useI18n } from '../i18n'

const MockComponent = ({ namespace, translateArg }: any) => {
  const { t, currentLanguage, changeLanguage } = useI18n(namespace)
  const handleChange = (e: any) => {
    changeLanguage(e.target.value)
  }
  return (
    <div>
      <div data-testid="currentLanguage">{currentLanguage}</div>
      <div>
      <select onChange={handleChange}>
        {Object.keys(i18n.config.languageOptions).map((key) => {
          return (
            <option
              key={key}
              value={key}
              defaultValue={i18n.config.initialLanguage}
            >
              {i18n.config.languageOptions[key]}
            </option>
          );
        })}
      </select>
      </div>
      <div>{t('city', { description: translateArg})}</div>
    </div>
  )
}

function setUp (cache: any, initialLanguage: string) {
  i18n.use({
    languageOptions: {
      en: '英语',
      cn: '中文'
    },
    initialLanguage,
    initialNamespace: undefined,
    cache
  })
}


afterEach(() => {
  i18n.use({} as any)
})

describe('useI18n', () => {

  it('Test useI18n without namespace', async () => {
    const mockCache = {
      en: {
        city: 'This is a {description} city'
      },
      cn: {
        city: '这是一座{description}城市'
      },
    }
    setUp(mockCache, 'en')
    const C = MockComponent
    const { queryByText } = render(<I18nProvider><C translateArg='big'/></I18nProvider>)
    expect(queryByText('This is a big city')).toBeInTheDocument()
    expect(screen.getByTestId('currentLanguage')).toHaveTextContent('en')
    userEvent.selectOptions(screen.getByRole('combobox'), screen.getByText('中文'))
    await waitFor(() => {
      expect(screen.getByTestId('currentLanguage')).toHaveTextContent('cn')
      expect(queryByText('这是一座big城市')).toBeInTheDocument()
    });

  })

  it('Test useI18n with namespace is common', () => {
    const mockCache = {
      en: {
        common: {
          city: 'This is a city'
        }
      },
    }
    setUp(mockCache, 'en')
    const C = MockComponent
    const { queryByText } = render(<I18nProvider><C namespace='common'/></I18nProvider>)
    expect(queryByText(mockCache.en.common.city)).toBeInTheDocument()
  })

})
