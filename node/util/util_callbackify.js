// 将 async 异步函数(或者一个返回值为 Promise 的函数)转换成遵循异常优先的回调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。在回调函数中, 第一个参数 err 为 Promise rejected 的原因 (如果 Promise 状态为 resolved , err为 null ),第二个参数则是 Promise 状态为 resolved 时的返回值.

const util = require('util');
 async function fn() {
     return 'hello world';
 }

 const callbackFnction = util.callbackify(fn);

 callbackFnction((err, ret) => {
     if (err) {
         throw err;
     }
     console.log(ret);
 })