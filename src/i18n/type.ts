export type T = (namespace: string, key: string, payload?: any) => string
export type ChangeLanguage = (lan: string) => void
export interface Config {
  languageOptions: {
    [key: string]: string
  },
  initialLanguage: string,
  initialNamespace?: string,
  cache: {
    [key: string]: any
  }
}

export interface I18n {
  config: Config,
  use: (config: Config) => I18n
}

export type UseI18n = (namespace?: string) => {
  t: (key: string, payload?: any) => string,
  changeLanguage: ChangeLanguage,
  currentLanguage: string
}

export type WithTranslation = (Component: React.FC, namespace?: string) => React.FC

