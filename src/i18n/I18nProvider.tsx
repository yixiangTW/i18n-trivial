/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import i18n from './i18n'
import I18nContext from './I18nContext'
import type { ChangeLanguage, T } from './type'

const I18nProvider = ({ children }: { children: JSX.Element }) => {
  const {
    config: { initialLanguage, cache }
  } = i18n

  const [currentLanguage, setCurrentLanguage] = React.useState<string>(initialLanguage)
  const [translations, setTranslations] = React.useState({} as any)

  React.useEffect(() => {
    if (cache[currentLanguage]) {
      setTranslations(cache[currentLanguage])
    }
  }, [currentLanguage])
  const t: T = (namespace, key, payload) => {
    let result: string
    if (typeof namespace !== 'undefined') {
      if (translations[namespace] && translations[namespace][key]) {
        result = translations[namespace][key]
      } else {
        result = key
      }
    } else {
      result = translations[key] || key
    }
    if (typeof payload !== 'undefined') {
      Object.keys(payload).map((key) => {
        return (result = result.replace(`{${key}}`, payload[key]))
      })
      return result
    }

    return result
  }
  const changeLanguage: ChangeLanguage = (lan) => {
    setCurrentLanguage(lan)
  }

  return (
    <I18nContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export default I18nProvider
