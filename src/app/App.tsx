import React from 'react';
import { withTranslation } from '../i18n'
function App({ t, currentLanguage }: any) {
  return (
    <div className="App">
      {t("name")}
      {/* {t("apples", {_count: 1})} */}
      {t("address", { city: currentLanguage === 'en' ? "xian" : '西安' })}
    </div>
  );
}

export default withTranslation(App);
