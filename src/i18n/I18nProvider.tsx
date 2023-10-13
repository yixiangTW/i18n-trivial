import React from 'react'
import i18n from './i18n'
import I18nContext from './I18nContext'
import translate from './translate'
import formatDate from './formatDate'
import type { ChangeLanguageFunction } from './type'

const I18nProvider = ({ children }: { children: JSX.Element }) => {
	const {
		config: { initialLanguage, cache, dateFormats, defaultDateFormatKey }
	} = i18n

	const [currentLanguage, setCurrentLanguage] = React.useState<string>(initialLanguage as string)
	const [translations, setTranslations] = React.useState({})
	const [formatDateConfig, setFormatDateConfig] = React.useState({})


	React.useEffect(() => {
		if (cache && cache[currentLanguage]) {
			setTranslations(cache[currentLanguage])
		}
		if(dateFormats && dateFormats[currentLanguage]) {
			setFormatDateConfig(dateFormats[currentLanguage])
		}
	}, [currentLanguage])

	const t = translate(translations)
	const fd = formatDate(formatDateConfig, defaultDateFormatKey)
	const changeLanguage: ChangeLanguageFunction = (lan) => {
		setCurrentLanguage(lan)
	}

	return (
		<I18nContext.Provider value={{ t, changeLanguage, currentLanguage, fd }}>
			{children}
		</I18nContext.Provider>
	)
}

export default I18nProvider
