import React from 'react';
import { withTranslation, i18n } from '../i18n'

function Language({ changeLanguage }: any) {
  const handleChange = (e: any) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleChange} defaultValue={i18n.config.initialLanguage}>
        {Object.keys(i18n.config.languageOptions).map((key) => {
          return (
            <option
              key={key}
              value={key}
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
