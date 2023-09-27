How to use ? 
[demo](https://github.com/yixiangTW/multi-language)

`npm install i18n-trivial`

Here is a demo, in root index.js
```javascript
import { I18nProvider } from "i18n-trivial";
import { createRoot } from "react-dom/client";
import Language from "./Language";
import App from "./App";


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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
  <I18nProvider>
    <App />
    <Language />
  </I18nProvider>
  </div>

);

```

App.js

```javascript
import { withTranslation } from "i18n-trivial";
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

you can use t, changeLanguage, currentLanguage with props by higher-order component withTranslation   

`withTranslation(YourComponent, namespace?)`   

you can also get this by function useI18n   

`const { t, changeLanguage, currentLanguage } = useI18n(namespace?)`

if you want change language   

Language.js

```javascript
import { withTranslation, i18n } from "i18n-trivial";

function Language({ changeLanguage }) {
  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleChange}>
        {Object.keys(i18n.config.languageOptions).map((key) => {
          return (
            <option
              key={key}
              value={key}
              selected={key === i18n.config.initialLanguage}
            >
              {i18n.config.languageOptions[key]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default withTranslation(Language);
```


Note: namespace default is common，please write translate source with this format
```json
{
  "common": {
    "name": "yixiang",
    "address": "city: {city}"
  },
  "namespace": {}
}
```
