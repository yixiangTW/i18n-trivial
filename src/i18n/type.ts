export type InnerTranslateFunction = (
  namespace: string | undefined,
  key: string,
  payload?: any
) => string;
export type TranslateFunction = (key: string, payload?: any) => string;
export type ChangeLanguageFunction = (lan: string) => void;
export type FormatDateFunction = (date: Date, formatKey?: string) => string;
export interface I18nConfig {
  languageOptions?: Record<string, string>;
  initialLanguage?: string;
  initialNamespace?: string;
  cache?: Record<string, any>;
  dateFormats?: Record<string, any>;
  defaultDateFormatKey?: string;
}

export interface I18n {
  readonly config: I18nConfig;
  use: (config: I18nConfig) => I18n;
  clean: () => I18n;
}

export type OuterProps = {
  t: TranslateFunction;
  changeLanguage: ChangeLanguageFunction;
  currentLanguage: string | undefined;
  fd: FormatDateFunction;
  [key: string]: any;
};

export type UseI18n = (namespace?: string) => OuterProps;

export type WithTranslation = (
  Component: React.ComponentType,
  namespace?: string
) => React.ComponentType;

export type I18nContextType = {
  t: InnerTranslateFunction;
  changeLanguage: ChangeLanguageFunction;
  currentLanguage: string | undefined;
  fd: FormatDateFunction;
};
