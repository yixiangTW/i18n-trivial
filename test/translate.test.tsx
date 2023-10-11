import translate from '../src/i18n/translate'

describe('', () => {



	it('Test t with basic', () => {
		const mockTranslations = {
			common: {
				name: 'yixiang'
			}
		}
		const t = translate(mockTranslations)
		expect(t('common', 'name')).toEqual('yixiang')
	})

	it('Test t with singular and plural when namespace is undefined', () => {
		const mockTranslations = {
			'student': {
				one: '{_count} student',
				other: '{_count} students'
			}
		}
		const t = translate(mockTranslations)
		expect(t(undefined, 'student', {_count: 3})).toEqual('3 students')
	})


	it('Test t with not exist arg', () => {
		const mockTranslations = {}
		const t = translate(mockTranslations)
		expect(t('common', 'student')).toEqual('student')
	})
})