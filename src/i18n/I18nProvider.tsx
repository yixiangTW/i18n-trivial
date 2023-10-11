import React from 'react'
import i18n from './i18n'
import I18nContext from './I18nContext'
import translate from './translate'
import type { ChangeLanguage } from './type'

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

	const t = translate(translations)
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
