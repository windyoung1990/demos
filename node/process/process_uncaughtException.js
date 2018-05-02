// 正确使用 'uncaughtException' 事件的方式，是用它在进程结束前执行一些已分配资源（比如文件描述符，句柄等等）的同步清理操作。 触发 'uncaughtException' 事件后，用它来尝试恢复应用正常运行的操作是不安全的。
// 想让一个已经崩溃的应用正常运行，更可靠的方式应该是启动另外一个进程来监测/探测应用是否出错， 无论 uncaughtException 事件是否被触发，如果监测到应用出错，则恢复或重启应用。

const fs = require('fs');
process.on('uncaughtException', (err) => {
    fs.writeSync(1, `捕获到异常：${err}\n`);
});
setTimeout(() => {
    console.log('这里仍然会执行');
}, 500);

// 故意调用一个不存在的函数，应用会抛出未捕获的异常

nonexistentFun();

console.log('这里不会执行')