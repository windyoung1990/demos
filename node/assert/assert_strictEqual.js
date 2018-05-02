// 使用全等运算符（===）测试 actual 参数与 expected 参数是否全等。
const assert = require('assert');

assert.strictEqual(1, 2);
// 抛出 AssertionError: 1 === 2

assert.strictEqual(1, 1);
// 测试通过。

assert.strictEqual(1, '1');
// 抛出 AssertionError: 1 === '1'


