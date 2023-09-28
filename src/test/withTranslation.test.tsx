/* eslint-disable */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import withTranslation from '../i18n/withTranslation'
import i18n from '../i18n/i18n'
import MockComponent from './MockComponent'
import I18nProvider from '../i18n/I18nProvider'

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

describe('withTranslation', () => {

  it('Test withTranslation without namespace', () => {
    const mockCache = {
      en: {
        city: 'This is a city'
      },
      cn: {
        city: '这是一座城市'
      }
    }
    setUp(mockCache, 'en')
    const C = withTranslation(MockComponent)
    const { queryByText } = render(<I18nProvider><C /></I18nProvider>)
    expect(queryByText('This is a city')).toBeInTheDocument()
  })

  it('Test withTranslation with namespace is default', () => {
    const mockCache = {
      en: {
        default: {
          city: 'This is a city'
        }
      },
      cn: {
        default: {
          city: '这是一座城市'
        }
      }
    }
    setUp(mockCache, 'en')
    const C = withTranslation(MockComponent, 'default')
    const { queryByText } = render(<I18nProvider><C /></I18nProvider>)
    expect(queryByText('This is a city')).toBeInTheDocument()
  })


  it('Test withTranslation with namespace is default but source is incorrect', () => {
    const mockCache = {
      en: {
        common: {
          city: 'This is a city'
        }
      },
    }
    setUp(mockCache, 'en')
    const C = withTranslation(MockComponent, 'default')
    const { queryByText } = render(<I18nProvider><C /></I18nProvider>)
    expect(queryByText('This is a city')).not.toBeInTheDocument()
  })
})
