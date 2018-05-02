// child_process.execFile() 函数类似 child_process.exec()，除了不衍生一个 shell。 而是，指定的可执行的 file 被直接衍生为一个新进程，这使得它比 child_process.exec() 更高效。
const { execFile } = require('child_process');
// 传给回调的 stdout 和 stderr 参数会包含子进程的 stdout 和 stderr 的输出。 默认情况下，Node.js 会解码输出为 UTF-8，并将字符串传给回调。
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(`${stdout}`)
})