// 当一个被监视的目录或文件有变化时触发。 详见 fs.watch()。
const fs = require('fs');
fs.watch('./tmp', (eventType, filename) => {
    if (filename) {
        console.log(filename)
    }
})