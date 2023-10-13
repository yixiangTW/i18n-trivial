import type { I18nConfig, I18n } from './type'

class I18nFactory {
	config: Readonly<I18nConfig> = {}

	use(config: I18nConfig) {
		this.clean()
		this.config = {...this.config, ...config}
		return this
	}


	getDefaultLan() {
		return navigator.language.toLowerCase()
	}

	clean() {
		this.config = {
			initialLanguage: this.getDefaultLan()
		}
	}
}


const i18n: I18n = new I18nFactory()

export default i18n
