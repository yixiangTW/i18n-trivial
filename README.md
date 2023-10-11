![example workflow](https://github.com/yixiangTW/i18n-trivial/actions/workflows/ci.yml/badge.svg)  ![npm](https://img.shields.io/npm/v/i18n-trivial.svg?style=flat)

### Install
npm install i18n-trivial --save-dev

### Usage
Here is an [example](https://github.com/yixiangTW/multi-language)

### API

```javascript
import { i18n, I18nProvider, useI18n, withTranslation } from "i18n-trivial";
```

##### i18n
`i18n.use(config)`

config arg:   
* languageOptions {[key: string]: string}
* initialLanguage string
* initialNamespace string
* cache {[key: string]: any}
```javascript
i18n.use({
  languageOptions: {
    en: "英语",
    cn: "中文"
  },
  initialLanguage: "cn",
  initialNamespace: "common",
  cache: {
    en: require('./locales/en.json'),
    cn: require('./locales/cn.json')
  }
})

```
##### I18nProvider
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

export default withTranslation(App);

```

> Note: if you config initialNamespace, `withTranslation` will read initialNamespace without input namespace by default

##### t
In you component, If you use withTranslation or useI18n, you can use t function to get result

```javascript
{t("address", { city: "xian" })}
{t('apples', {_count: 3})}
```
* key: string
* payload?: any




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
