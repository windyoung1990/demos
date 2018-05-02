// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
const assert = require('assert')
assert.ifError(null)
// 测试通过。
assert.ifError(0);
// 测试通过。
// assert.ifError(1);
// 抛出 1。

assert.ifError('error');
// 抛出 'error'。


assert.ifError(new Error());
// 抛出 Error。

