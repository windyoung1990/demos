// 测试 actual 参数与 expected 参数是否深度相等。 原始值使用相等运算符（==）比较。
const assert = require('assert');
const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);


assert.deepEqual(obj1, obj1);
// 测试通过，对象与自身相等。
// assert.deepEqual(obj1, obj2);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// 因为 b 属性的值不同。
assert.deepEqual(obj1, obj3);


assert.deepEqual(obj1, obj4);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual {}
// 因为不测试原型。
