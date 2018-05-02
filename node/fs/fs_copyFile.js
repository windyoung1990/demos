// fs.copyFile(src, dest[, flags], callback)
// 异步的将 src 拷贝到 dest.默认情况下，如果 dest 已经存在会被覆盖。
// flags 是一个可选的整数，用于指定行为的拷贝操作。唯一支持的 flag 是 fs.constants.COPYFILE_EXCL ，如果 dest 已经存在，则会导致拷贝操作失败。

const fs = require('fs');

fs.copyFile('message.txt','destination.txt',fs.constants.COPYFILE_EXCL,(err) => {
    if (err) {
        console.log(err);
    }
    console.log('message.txt was copied to destination.txt');
})