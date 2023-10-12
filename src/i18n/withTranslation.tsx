import type { WithTranslation } from './type'
import i18n from './i18n'
import useI18n from './useI18n'
import React from 'react'

// eslint-disable-next-line react/display-name
const withTranslation: WithTranslation = (Component, namespace) => (props: any) => {
	const { t, changeLanguage, currentLanguage, fd } = useI18n(
		namespace || i18n.config.initialNamespace
	)
	return (
		<Component
			{...props}
			t={t}
			changeLanguage={changeLanguage}
			currentLanguage={currentLanguage}
			fd={fd}
		/>
	)
}

export default withTranslation
