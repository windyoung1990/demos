// child_process.spawn() 函数会异步地衍生子进程，且不会阻塞 Node.js 事件循环。 child_process.spawnSync() 函数则以同步的方式提供同样的功能，但会阻塞事件循环，直到衍生的子进程退出或被终止。

// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);
// ls.stdout.on('data', (data) => {
//     console.log(`输出：${data}`);
// });
// ls.stderr.on('error', (data) => {
//     console.log(`错误：${data}`);
// });
// ls.on('close', (code) => {
//     console.log(`子进程退出码：${code}`);
// });

/**
 * 一种执行'ps ax | grep ssh'的方法
*/
const { spawn } = require('child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);
ps.stdout.on('data', (data) => {
    grep.stdin.write(data);
});
ps.stderr.on('data', (data) => {
    console.log(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
    if (code !== 0) {
        console.log(`ps 进程退出码：${code}`);
    }
    grep.stdin.end();
});
grep.stdout.on('data', (data) => {
    console.log(data.toString());
});
grep.stderr.on('data', (data) => {
    console.log(`grep stderr: ${data}`);
});
grep.on('close', (code) => {
    if (code !== 0) {
        console.log(`grep 进程退出码： ${code}`)
    } 
})