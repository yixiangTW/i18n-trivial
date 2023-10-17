import formatDate from '../src/i18n/formatDate';

const date = new Date('2023 10 13 11:51:13');
const longResult = '10 13, 2023 11:51:13';
const shortResult = '10/13/2023';
const mockDateFormats = {
  short: 'MM/dd/yyyy',
  long: 'MM dd, yyyy HH:mm:ss',
};
describe('', () => {
  it('Test formatDate in common', () => {
    const f = formatDate(mockDateFormats, 'short');
    expect(typeof f).toBe('function');
    expect(f(date)).toEqual(shortResult);
  });

  it('Test create formatDate with default key is long and exec with default', () => {
    expect(formatDate(mockDateFormats, 'long')(date)).toEqual(longResult);
  });

  it('Test create formatDate with default key is long and exec with short', () => {
    expect(formatDate(mockDateFormats, 'long')(date, 'short')).toEqual(shortResult);
  });

  it('Test hh in formatDate with default key is long and exec with other', () => {
    const mockDate = new Date('2023 10 13 13:51:13');
    const mockResult = '10 13, 2023 01:51:13 PM';
    expect(formatDate({
      other: 'MM dd, yyyy hh:mm:ss a',
    }, 'long')(mockDate, 'other')).toEqual(mockResult);
  });

  it('Test create formatDate with empty mockDateFormats', () => {
    expect(formatDate({}, 'long')(date)).toEqual(date.toString());
  });

  it('Test create formatDate with empty key', () => {
    expect(formatDate(mockDateFormats)(date)).toEqual(date.toString());
  });
});
