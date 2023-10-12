import React from 'react'
import { withTranslation } from '../i18n'
function App({ t, currentLanguage, fd }: any) {
	return (
		<div className="App">
			<div>{fd(new Date(), 'long')}</div>
			<div> name: {t('name')}</div>
			<div> apple: {t('apples', {_count: 3})}</div>
			<div> address: {t('address', { city: currentLanguage === 'en' ? 'xian' : '西安' })}</div>
		</div>
	)
}

export default withTranslation(App)
