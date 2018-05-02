// process.chdir(directory) 变更Node.js进程的当前工作目录,如果变更目录失败会抛出异常(例如，如果指定的目录不存在)。
console.log(`Starting directory:${process.cwd()}`)

try {
    process.chdir('/tmp');
    console.log(`New directory: ${process.cwd()}`);
} catch (err) {
    console.error(`chdir: ${err}`)
}