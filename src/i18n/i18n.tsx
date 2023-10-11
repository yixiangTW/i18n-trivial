import type { Config, I18n } from './type'

const i18n: I18n = {
	config: {} as Config,
	use (config: Config) {
		this.config = config
		return this
	}
}

export default i18n
