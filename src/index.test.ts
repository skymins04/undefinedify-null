import { describe, test, expect } from 'vitest';
import { undefinedifyNull, undefinedifyNullProperties } from '.';

describe('undefinedifyNull()', () => {
  test('string | boolean | number | null | undefined 타입을 인자로 전달 받으면 string | boolean | number | undefined를 리턴 해야한다.', () => {
    const obj: {
      property?: {
        [key: string]: string | boolean | number | null;
      };
    } = {
      property: {
        value1: 'foo',
        value2: '',
        value3: null,
        value4: 0,
        value5: 10000,
        value6: -9999,
        value7: Infinity,
        value8: NaN,
        value9: false,
        value10: true,
      },
    };

    expect(undefinedifyNull(obj.property?.value1)).toBe('foo');
    expect(undefinedifyNull(obj.property?.value2)).toBe('');
    expect(undefinedifyNull(obj.property?.value3)).toBe(undefined);
    expect(undefinedifyNull(obj.property?.value4)).toBe(0);
    expect(undefinedifyNull(obj.property?.value5)).toBe(10000);
    expect(undefinedifyNull(obj.property?.value6)).toBe(-9999);
    expect(undefinedifyNull(obj.property?.value7)).toBe(Infinity);
    expect(undefinedifyNull(obj.property?.value8)).toBe(NaN);
    expect(undefinedifyNull(obj.property?.value9)).toBe(false);
    expect(undefinedifyNull(obj.property?.value10)).toBe(true);
    expect(undefinedifyNull(obj.property?.undfeindProperty)).toBe(undefined);
  });
});

describe('undefinedifyNullProperties()', () => {
  test('string | boolean | number | null | undefined 타입을 인자로 전달 받으면 string | boolean | number | undefined를 리턴 해야한다.', () => {
    const obj: {
      property?: {
        [key: string]: string | boolean | number | null;
      };
    } = {
      property: {
        value1: 'foo',
        value2: '',
        value3: null,
        value4: 0,
        value5: 10000,
        value6: -9999,
        value7: Infinity,
        value8: NaN,
        value9: false,
        value10: true,
      },
    };

    expect(undefinedifyNullProperties(obj.property?.value1)).toBe('foo');
    expect(undefinedifyNullProperties(obj.property?.value2)).toBe('');
    expect(undefinedifyNullProperties(obj.property?.value3)).toBe(undefined);
    expect(undefinedifyNullProperties(obj.property?.value4)).toBe(0);
    expect(undefinedifyNullProperties(obj.property?.value5)).toBe(10000);
    expect(undefinedifyNullProperties(obj.property?.value6)).toBe(-9999);
    expect(undefinedifyNullProperties(obj.property?.value7)).toBe(Infinity);
    expect(undefinedifyNullProperties(obj.property?.value8)).toBe(NaN);
    expect(undefinedifyNullProperties(obj.property?.value9)).toBe(false);
    expect(undefinedifyNullProperties(obj.property?.value10)).toBe(true);
    expect(undefinedifyNullProperties(obj.property?.undfeindProperty)).toBe(undefined);
  });

  test('null이 포함된 Array를 인자로 전달 받으면, null 아이템들을 undefined로 치환한 Array를 반환해야한다.', () => {
    const array1: any[] = [null, 1234, 'foo', Infinity, null, undefined, NaN, false, true];
    const array2: any[] = [];

    expect(undefinedifyNullProperties(array1)).toStrictEqual([
      undefined,
      1234,
      'foo',
      Infinity,
      undefined,
      undefined,
      NaN,
      false,
      true,
    ]);
    expect(undefinedifyNullProperties(array2)).toStrictEqual([]);
  });

  test('null이 포함된 Object를 인자로 전달 받으면, null 프로퍼티들을 undefined로 치환한 Object를 반환해야한다.', () => {
    const obj = {
      prop1: null,
      prop2: [null, undefined, 1234, true, { props2_1: null, props2_2: undefined, props2_3: 1234 }],
      prop3: 1234,
      prop4: [],
      prop5: {
        prop5_1: Infinity,
        prop5_2: NaN,
        prop5_3: false,
        prop5_4: true,
        prop5_5: 'foo',
      },
    };

    expect(undefinedifyNullProperties(obj)).toStrictEqual({
      prop1: undefined,
      prop2: [undefined, undefined, 1234, true, { props2_1: undefined, props2_2: undefined, props2_3: 1234 }],
      prop3: 1234,
      prop4: [],
      prop5: {
        prop5_1: Infinity,
        prop5_2: NaN,
        prop5_3: false,
        prop5_4: true,
        prop5_5: 'foo',
      },
    });
  });
});
