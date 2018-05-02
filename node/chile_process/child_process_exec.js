// child_process.exec() 不会替换现有的进程，且使用一个 shell 来执行命令。
const { exec } = require('child_process');
// 传给回调的 stdout 和 stderr 参数会包含子进程的 stdout 和 stderr 的输出
exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})