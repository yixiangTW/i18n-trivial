import translate from '../src/i18n/translate';

describe('', () => {
  it('Test t with basic', () => {
    const mockTranslations = {
      common: {
        name: 'yixiang',
      },
    };
    const t = translate(mockTranslations);
    expect(t('common', 'name')).toEqual('yixiang');
  });

  it('Test t with singular and plural when namespace is undefined', () => {
    const mockTranslations = {
      student: {
        one: '{_count} student',
        other: '{_count} students',
      },
    };
    const t = translate(mockTranslations);
    expect(t(undefined, 'student', { _count: 3 })).toEqual('3 students');
    expect(t(undefined, 'student', { _count: 1 })).toEqual('1 student');
  });

  it('Test t with singular and plural when _count is null', () => {
    const mockTranslations = {
      student: {
        one: '{_count} student',
        other: '{_count} students',
      },
    };
    const t = translate(mockTranslations);
    expect(t(undefined, 'student', { _count: null })).toEqual('0 student');
  });

  it('Test t with singular and plural when _count is ""', () => {
    const mockTranslations = {
      student: {
        one: '{_count} student',
        other: '{_count} students',
      },
    };
    const t = translate(mockTranslations);
    expect(t(undefined, 'student', { _count: '' })).toEqual(' student');
  });

  it('Test t with singular and plural when _count is NaN', () => {
    const mockTranslations = {
      student: {
        one: '{_count} student',
        other: '{_count} students',
      },
    };
    const t = translate(mockTranslations);
    expect(t(undefined, 'student', { _count: 'xxx' })).toEqual('NaN student');
    expect(t(undefined, 'student', { _count: undefined })).toEqual('NaN student');
  });

  it('Test t with not exist arg', () => {
    const mockTranslations = {};
    const t = translate(mockTranslations);
    expect(t('common', 'student')).toEqual('student');
  });

  it('Test t with not exist arg', () => {
    const mockTranslations = {
      common: {},
    };
    const t = translate(mockTranslations);
    expect(t('common', 'student')).toEqual('student');
  });
});
