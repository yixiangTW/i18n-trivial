import formatDate from '../src/i18n/formatDate'

const date = new Date('2023 10 13 11:51:13')
const longResult = '10 13, 2023 11:51:13'
const shortResult = '10/13/2023'
const mockDateFormats = {
	short: 'MM/dd/yyyy',
	long: 'MM dd, yyyy HH:mm:ss',
}
describe('', () => {
	it('Test formatDate in common', () => {
		const f = formatDate(mockDateFormats, 'short')
		expect(typeof f).toBe('function')
		expect(f(date)).toEqual(shortResult)
	})

	it('Test create formatDate with default key is long and exec with default', () => {
		expect(formatDate(mockDateFormats, 'long')(date)).toEqual(longResult)
	})

	it('Test create formatDate with default key is long and exec with short', () => {
		expect(formatDate(mockDateFormats, 'long')(date, 'short')).toEqual(shortResult)
	})
})