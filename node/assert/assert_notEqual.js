// const assert = require('assert');

assert.notEqual(1, 2);
// 测试通过。

assert.notEqual(1, 1);
// 抛出 AssertionError: 1 != 1

assert.notEqual(1, '1');
// 抛出 AssertionError: 1 != '1'使用不等运算符（!=）测试 actual 参数与 expected 参数是否不相等。

