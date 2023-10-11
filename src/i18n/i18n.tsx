import type { I18nConfig, I18n } from './type'

class I18nFactory {
	config: Readonly<I18nConfig> = {} as I18nConfig

	use(config: I18nConfig) {
		this.config = config
		return this
	}
}


const i18n: I18n = new I18nFactory()

export default i18n
