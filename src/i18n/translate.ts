import { InnerTranslateFunction } from './type';

type translateType = (translations: any) => InnerTranslateFunction

const translate: translateType = (translations) => (namespace, key, payload) => {
  if (Object.keys(translations).length === 0) {
    return key;
  }
  let result: any;
  if (typeof namespace !== 'undefined') {
    if (translations[namespace] && translations[namespace][key]) {
      result = translations[namespace][key];
    } else {
      result = key;
    }
  } else {
    result = translations[key] || key;
  }

  if (payload && ('_count' in payload) && result.other && result.one) {
    payload._count = payload._count === '' ? '' : Number(payload._count);
    if (Number.isNaN(payload._count)) {
      result = result.one;
    } else {
      result = payload._count > 1 ? result.other : result.one;
    }
  }

  if (typeof payload !== 'undefined') {
    Object.keys(payload).forEach((arg) => { result = result.replace(`{${arg}}`, payload[arg]); });
    return result;
  }

  return result;
};

export default translate;
