const translate = (translations: any) => (namespace: string, key: string, payload?: any) => {
	if (Object.keys(translations).length === 0) {
		return
	}
	let result: any
	if (typeof namespace !== 'undefined') {
		if (translations[namespace] && translations[namespace][key]) {
			result = translations[namespace][key]
		} else {
			result = key
		}
	} else {
		result = translations[key] || key
	}
	if (payload && payload._count && result.other && result.one) {
		result = payload._count > 1 ? result.other : result.one
	}

	if (typeof payload !== 'undefined') {
		Object.keys(payload).map((key) => {
			return (result = result.replace(`{${key}}`, payload[key]))
		})
		return result
	}

	return result
}

export default translate
