/* eslint-disable */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import i18n from '../i18n/i18n'
import I18nProvider from '../i18n/I18nProvider'
import { useI18n } from '../i18n'

const MockComponent = ({ namespace }: any) => {
  const { t } = useI18n(namespace)
  return (
    <div>
      {t('city')}
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

  it('Test useI18n without namespace', () => {
    const mockCache = {
      en: {
        city: 'This is a city'
      },
    }
    setUp(mockCache, 'en')
    const C = MockComponent
    const { queryByText } = render(<I18nProvider><C /></I18nProvider>)
    expect(queryByText(mockCache.en.city)).toBeInTheDocument()
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
