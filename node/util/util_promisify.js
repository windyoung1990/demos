const util = require('util');
const fs = require('fs');
// 让一个遵循异常优先的回调风格的函数， 即 (err, value) => ... 回调函数是最后一个参数, 返回一个返回值是一个 promise 版本的函数。
const stat = util.promisify(fs.stat);

stat('.').then((stats) => {
    console.log(stats);
}).catch((err) => {
    console.error(err);
})

