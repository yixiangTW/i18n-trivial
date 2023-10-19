/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { withTranslation } from '../src/i18n';
import './index.css';

function App({ t, fd }: any) {
  const [count, setCount] = useState(3);
  const [city, setCity] = useState('Xi\'an');
  const [dateFormatKey, setDateFormatKey] = useState('long');
  const handleChange = (e: any) => {
    setCount(e.target.value);
  };
  return (
    <div className="App">
      <h1>i18n-trivial</h1>
      <pre>123</pre>
      <h3>t</h3>
      <table className="rwd-table">
        <tr>
          <th>key</th>
          <th>Result</th>
          <th>Argument</th>
          <th>Code</th>

        </tr>
        <tr>
          <td data-th="Movie Title">Name</td>
          <td data-th="Genre"><div id="name">{t('name')}</div></td>
          <td data-th="Year">null</td>
          <td data-th="Gross">{'t(\'name\')'}</td>

        </tr>
        <tr>
          <td data-th="Movie Title">Number of apples</td>
          <td data-th="Genre"><div id="apple">{t('apples', { _count: count })}</div></td>
          <td data-th="Year"><input id="changeCount" value={count} type="number" onChange={handleChange} /></td>
          <td data-th="Gross">{"t('apples', { _count })"}</td>

        </tr>
        <tr>
          <td data-th="Movie Title">Address</td>
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

      <h3>fd</h3>
      <table className="rwd-table">
        <tr>
          <th>Result</th>
          <th>Code</th>
          <th>Argument</th>

        </tr>
        <tr>
          <td data-th="Movie Title">{fd(new Date(), dateFormatKey)}</td>
          <td data-th="Gross">{`fd(new Date(), ${dateFormatKey})`}</td>
          <td data-th="Year">
            <select id="selectKey" onChange={(e) => { setDateFormatKey(e.target.value); }} defaultValue={dateFormatKey}>
              {['long', 'short'].map((key) => (
                <option
                  key={key}
                  value={key}
                >
                  {key}
                </option>
              ))}
            </select>
          </td>
        </tr>

      </table>

    </div>
  );
}

export default withTranslation(App);
