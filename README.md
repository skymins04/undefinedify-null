# undefinedify-null

A library that replaces `null` type to `undefined` type.

This module is available in three formats:

- ES Module: `dist/index.esm.js`
- CommonJS: `dist/index.js`

# Installation

```sh
$ npm install --save undefinedify-null
```

# Usage

## undefinedifyNull()

```ts
import { undefinedifyNull } from 'undefinedify-null';

const obj: { property?: { [key: string]: string | null } } = {
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

console.log(undefinedifyNull(obj.property?.value1)); // input: 'foo', output: 'foo'
console.log(undefinedifyNull(obj.property?.value2)); // input: '', output: ''
console.log(undefinedifyNull(obj.property?.value3)); // input: null, output: undefined
console.log(undefinedifyNull(obj.property?.value4)); // input: 0, output: 0
console.log(undefinedifyNull(obj.property?.value5)); // input: 10000, output: 10000
console.log(undefinedifyNull(obj.property?.value6)); // input: -9999, output: -9999
console.log(undefinedifyNull(obj.property?.value7)); // input: Infinity, output: Infinity
console.log(undefinedifyNull(obj.property?.value8)); // input: NaN, output: NaN
console.log(undefinedifyNull(obj.property?.value9)); // input: false, output: false
console.log(undefinedifyNull(obj.property?.value10)); // input: true, output: true
console.log(undefinedifyNull(obj.property?.undfeindProperty)); // input: undefined, output: undefined
```

## undefinedifyNullProperties()

```ts
import { undefinedifyNullProperties } from 'undefinedify-null';

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

console.log(undefinedifyNullProperties(obj));
/**
 * input: {
 *   prop1: null,
 *   prop2: [null, undefined, 1234, true, { props2_1: null, props2_2: undefined, props2_3: 1234 }],
 *   prop3: 1234,
 *   prop4: [],
 *   prop5: {
 *     prop5_1: Infinity,
 *     prop5_2: NaN,
 *     prop5_3: false,
 *     prop5_4: true,
 *     prop5_5: 'foo',
 *   },
 * }
 *
 * output: {
 *   prop1: undefined,
 *   prop2: [undefined, undefined, 1234, true, { props2_1: undefined, props2_2: undefined, props2_3: 1234 }],
 *   prop3: 1234,
 *   prop4: [],
 *   prop5: {
 *     prop5_1: Infinity,
 *     prop5_2: NaN,
 *     prop5_3: false,
 *     prop5_4: true,
 *     prop5_5: 'foo',
 *   },
 * }
 */
```
