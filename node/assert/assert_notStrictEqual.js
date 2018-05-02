// 使用不全等运算符（!==）测试 actual 参数与 expected 参数是否不全等。
const assert = require('assert');

assert.notStrictEqual(1, 2);
// 测试通过。

assert.notStrictEqual(1, 1);
// 抛出 AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// 测试通过。