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
      {t("address", { city: "xian" })}
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
      {t("address", { city: "xian" })}
    </div>
  );
}

export default withTranslation(App);

```

> Note: if you config initialNamespace, `withTranslation` will read initialNamespace without input namespace by default

please write translate source with this format


### source example
common is a namespace, you can also skip namespaces

```json
{
  "common": {
    "name": "yixiang",
    "address": "city: {city}"
  }
}
```

```json
{
  "name": "yixiang",
  "address": "city: {city}"
}
```
