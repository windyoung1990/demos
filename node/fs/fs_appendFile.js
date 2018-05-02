// 异步地追加数据到一个文件，如果文件不存在则创建文件。 data 可以是一个字符串或 Buffer。

const fs = require('fs');
fs.appendFile('message.txt', 'data to append', (err) => {
    if(err) {
        throw err;
    }
    console.log('The "data to append" was appended to file!');
})