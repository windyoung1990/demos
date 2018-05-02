// 测试 actual 参数与 expected 参数是否不深度相等。 与 assert.deepEqual() 相反。

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
  
  assert.notDeepEqual(obj1, obj1);
  // 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
  
  assert.notDeepEqual(obj1, obj2);
  // 测试通过，obj1 与 obj2 不深度相等。
  
  assert.notDeepEqual(obj1, obj3);
  // 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
  
  assert.notDeepEqual(obj1, obj4);
  // 测试通过，obj1 与 obj4 不深度相等。