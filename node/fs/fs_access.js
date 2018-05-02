const fs = require('fs');
// 测试 path 指定的文件或目录的用户权限
fs.access('./tmp', fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log(err ? 'no access!' : 'can read/write');
});
// 不建议在调用 fs.open() 、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查一个文件的可访问性。 如此处理会造成紊乱情况，因为其他进程可能在两个调用之间改变该文件的状态。 作为替代，用户代码应该直接打开/读取/写入文件，当文件无法访问时再处理错误。