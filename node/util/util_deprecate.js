// util.deprecate() 方法会包装给定的 function 或类，并标记为废弃的。
const util = require('util');

exports.put = util.deprecate(function() {
    for (let i = 0; i < arguments.length; i++) {
        process.stdout.write(arguments[i] + '\n');
    }
}, 'util.puts: 使用console.log代替')