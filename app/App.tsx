/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { withTranslation } from '../src/i18n';
import type { OuterProps } from '../src/i18n/type';
import './index.css';

function App({ t } : OuterProps) {
  const [count, setCount] = useState(3);
  const [city, setCity] = useState('Xi\'an');
  const handleChange = (e: any) => {
    setCount(e.target.value);
  };
  return (
    <div className="App">
      <h1>i18n-trivial</h1>
      <h3>t</h3>
      <table className="rwd-table">
        <tr>
          <th>key</th>
          <th>Result</th>
          <th>Argument</th>
          <th>Code</th>

        </tr>
        <tr>
          <td data-th="Movie Title">name</td>
          <td data-th="Genre"><div id="name">{t('name')}</div></td>
          <td data-th="Year">null</td>
          <td data-th="Gross">{'t(\'name\')'}</td>

        </tr>
        <tr>
          <td data-th="Movie Title">apples</td>
          <td data-th="Genre"><div id="apple">{t('apples', { _count: count })}</div></td>
          <td data-th="Year"><input id="changeCount" value={count} type="number" onChange={handleChange} /></td>
          <td data-th="Gross">{"t('apples', { _count })"}</td>

        </tr>
        <tr>
          <td data-th="Movie Title">address</td>
          <td data-th="Genre"><div id="address">{t('address', { city })}</div></td>
          <td data-th="Year">
            <select id="selectCity" onChange={(e) => { setCity(e.target.value); }} defaultValue={city}>
              {['Xi\'an', 'Beijing', 'Qingdao'].map((key) => (
                <option
                  key={key}
                  value={key}
                >
                  {key}
                </option>
              ))}
            </select>
          </td>
          <td data-th="Gross">{"t('address', { city })"}</td>
        </tr>

      </table>

    </div>
  );
}

export default withTranslation(App);
