// util.inspect() 方法返回 object 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面。

const util = require('util');
console.log(util.inspect(util, {showHidden: true, depth: null}))