![example workflow](https://github.com/yixiangTW/i18n-trivial/actions/workflows/ci.yml/badge.svg)  ![npm](https://img.shields.io/npm/v/i18n-trivial.svg?style=flat)

### Install
```
npm install i18n-trivial --save-dev
```

### Usage
Here's an [example](https://github.com/yixiangTW/multi-language), You can also clone this project and run `npm run dev`

### API

```javascript
import { i18n, I18nProvider, useI18n, withTranslation } from "i18n-trivial";
```

##### i18n

You need to execute `i18n.use(config)` before the root component render

* languageOptions?: Record<string, string>;
* initialLanguage?: string;
* initialNamespace?: string;
* cache?: Record<string, any>;
* dateFormats?: Record<string, any>;
* defaultDateFormatKey?: string;
```javascript
i18n.use({
languageOptions: {
  en: '英语',
  cn: '中文',
  },
  // initialLanguage: 'cn', set from the browser default value
  initialNamespace: 'common',
  cache: {
    en: require('./locales/en.json'),
    cn: require('./locales/cn.json'),
  },
  dateFormats: {
    en: {
      short: 'MM/dd/yyyy',
      long: 'MM dd, yyyy HH:mm:ss',
    },
    cn: {
      short: 'yyyy年MM月dd日',
      long: 'yyyy年MM月dd日 HH:mm:ss',
    },
  },
  defaultDateFormatKey: 'short'
})

```
##### I18nProvider
You need to wrap the project root component with the `<I18nProvider>`
```javascript
  <I18nProvider>
    <App />
  </I18nProvider>
```

##### useI18n
```javascript
function App() {
  const { t, changeLanguage, currentLanguage } = useI18n(namespace?)
  return (
    <div className="App">
      {t("name")}
    </div>
  );
}
export default App;
```


##### withTranslation
```javascript
function App({ t }) {
  return (
    <div className="App">
      {t("name")}
    </div>
  );
}

export default withTranslation(App, namespace?);

```

> Note: If you configured initialNamespace, this property will be read automatically when using withTranslation

##### t

```javascript
{t("address", { city: "xian" })}
{t('apples', {_count: 3})}
```
* key: string
* payload?: any

##### fd

```javascript
fd(new Date(), key?)
```
* date: Date
* key?: string



### translation source example
Please follow the format below to create the translation file, please note that `common` is a namespace, you can also ignore this parameter, if you do not want to use the namespace, and `_count` is a unique attribute, used to do simple and complex, do not use other


```json
{
  "common": {
    "name": "yixiang",
    "address": "i'm in {city}",
    "apples": {
      "one": "{_count} apple",
      "other": "{_count} apples"
    }
  }
}
```

```json
{
  "name": "yixiang",
  "address": "city: {city}"
}
```
