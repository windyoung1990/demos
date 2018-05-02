// 与 assert.deepEqual() 大致相同，但有一些区别：

// 原始值使用全等运算符（===）比较。Set 的值与 Map 的键使用 SameValueZero 比较。
// 对象的原型也使用全等运算符比较。
// 对象的类型标签要求相同。
// 比较[对象包装器][]时，其对象和里面的值要求相同。


const assert = require('assert');

assert.deepEqual({a: 1}, {a: '1'});
// 测试通过，因为 1 == '1'。


// assert.deepStrictEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// 因为使用全等运算符 1 !== '1'。

// 以下对象都没有自身属性。
const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);
assert.deepEqual(object, fakeDate);
// 测试通过，不测试原型。
// assert.deepStrictEqual(object, fakeDate);
// 抛出 AssertionError: {} deepStrictEqual Date {}
// 因为原型不同。

assert.deepEqual(date, fakeDate);
// 测试通过，不测试类型标签。


// assert.deepStrictEqual(date, fakeDate);
// AssertionError [ERR_ASSERTION]: 2018-04-29T15:34:25.557Z deepStrictEqual Date {}
// 因为类型标签不同。

// assert.deepStrictEqual(new Number(1), new Number(2));
// 测试不通过，因为数值对象包装器里面的数值也会被比较。
assert.deepStrictEqual(new String('foo'), Object('foo'));
// 测试通过，因为这两个对象和里面的字符串都是相同的
