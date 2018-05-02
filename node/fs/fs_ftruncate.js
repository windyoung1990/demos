const fs = require('fs');

console.log(fs.readFileSync('message.txt', 'utf8'));
// 输出 data to append

// 获取要截断的文件的文件描述符
const fd = fs.openSync('message.txt', 'r+');
// 如果文件描述符指向的文件大于 len 个字节，则只有前面 len 个字节会保留在文件中。
fs.ftruncate(fd, 10, (err) => {
    // assert.ifError(err);
    if (err) {
        throw err;
    }
    console.log(fs.readFileSync('message.txt', 'utf8'));
    //输出  data to ap
});

// 如果前面的文件小于 len 个字节，则扩展文件，且扩展的部分用空字节（'\0'）填充。例子：
