// process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath。如果需要获取argv[0]的值请参见 process.argv0。第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
})