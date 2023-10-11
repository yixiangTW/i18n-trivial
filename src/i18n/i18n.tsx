import type { I18nConfig, I18n } from './type'

class I18nFactory {
	config: Readonly<I18nConfig> = {} as I18nConfig

	use(config: I18nConfig) {
		this.clean()
		this.config = {...this.config, ...config}
		return this
	}

	clean() {
		this.config = {
			initialLanguage: navigator.language.split('-')[0]
		} as I18nConfig
	}
}


const i18n: I18n = new I18nFactory()

export default i18n
