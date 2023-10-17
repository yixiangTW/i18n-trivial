import { FormatDateFunction } from './type';

type DateFormats = {
  [key: string]: string
}

type FormatDate = (dateFormats: DateFormats, defaultDateFormatKey?: string) => FormatDateFunction
const formatDate: FormatDate = (dateFormats, defaultDateFormatKey) => (date, formatKey) => {
  if (Object.keys(dateFormats).length === 0) {
    return date.toString();
  }
  if (!formatKey) {
    formatKey = defaultDateFormatKey;
  }
  const dateFormat = formatKey ? dateFormats[formatKey] : undefined;
  if (!dateFormat) {
    return date.toString();
  }
  const formattedDate = dateFormat
    .replace('yyyy', date.getFullYear().toString())
    .replace('yy', date.getFullYear().toString().slice(-2))
    .replace('MM', (date.getMonth() + 1).toString().padStart(2, '0'))
    .replace('M', (date.getMonth() + 1).toString())
    .replace('dd', date.getDate().toString().padStart(2, '0'))
    .replace('d', date.getDate().toString())
    .replace('HH', date.getHours().toString().padStart(2, '0'))
    .replace('hh', (date.getHours() % 12 || 12).toString().padStart(2, '0'))
    .replace('h', (date.getHours() % 12 || 12).toString())
    .replace('a', date.getHours() < 12 ? 'AM' : 'PM')
    .replace('mm', date.getMinutes().toString().padStart(2, '0'))
    .replace('ss', date.getSeconds().toString().padStart(2, '0'))
    .replace('SSS', date.getMilliseconds().toString().padStart(3, '0'));

  return formattedDate;
};

export default formatDate;
