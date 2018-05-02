// 测试 actual 参数与 expected 参数是否不深度全等。 与 assert.deepStrictEqual() 相反。

const assert = require('assert');

assert.notDeepEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// 测试通过。
