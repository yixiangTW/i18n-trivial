import { FormatDateFunction } from './type'

type FormatDate = (dateFormats: any, defaultDateFormatKey?: string) => FormatDateFunction
const formatDate: FormatDate = (dateFormats, defaultDateFormatKey) => (date, formatKey = defaultDateFormatKey) => {
	if (Object.keys(dateFormats).length === 0) {
		return date.toString()
	}

	const dateFormat = formatKey ? dateFormats[formatKey] : undefined
	const formattedDate = dateFormat && dateFormat
		.replace('yyyy', date.getFullYear())
		.replace('yy', date.getFullYear().toString().slice(-2))
		.replace('MM', (date.getMonth() + 1).toString().padStart(2, '0'))
		.replace('M', date.getMonth() + 1)
		.replace('dd', date.getDate().toString().padStart(2, '0'))
		.replace('d', date.getDate())
		.replace('HH', date.getHours().toString().padStart(2, '0'))
		.replace('hh', (date.getHours() % 12 || 12).toString().padStart(2, '0'))
		.replace('h', date.getHours() % 12 || 12)
		.replace('a', date.getHours() < 12 ? 'AM' : 'PM')
		.replace('mm', date.getMinutes().toString().padStart(2, '0'))
		.replace('ss', date.getSeconds().toString().padStart(2, '0'))
		.replace('SSS', date.getMilliseconds().toString().padStart(3, '0'))


	return formattedDate
}




export default formatDate
