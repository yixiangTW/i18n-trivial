import React from 'react';
import { withTranslation, i18n } from '../src/i18n';

function Language({ changeLanguage, currentLanguage }: any) {
  const handleChange = (e: any) => {
    changeLanguage(e.target.value);
  };
  const languageOptions = i18n.config.languageOptions || {};
  return (
    <div className="App">
      <h3>changeLanguage</h3>
      <select id="changeLanguage" onChange={handleChange} defaultValue={i18n.config.initialLanguage}>
        {Object.keys(languageOptions).map((key) => (
          <option
            key={key}
            value={key}
          >
            {languageOptions[key]}
          </option>
        ))}
      </select>
      <h3>currentLanguage</h3>
      <div>{currentLanguage + languageOptions[currentLanguage]}</div>
    </div>
  );
}
export default withTranslation(Language);
