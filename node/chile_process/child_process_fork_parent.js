// child_process.fork() 方法是 child_process.spawn() 的一个特殊情况，专门用于衍生新的 Node.js 进程。
// 衍生的 Node.js 子进程与两者之间建立的 IPC 通信信道的异常是独立于父进程的。 每个进程都有自己的内存，使用自己的 V8 实例。 由于需要额外的资源分配，因此不推荐衍生大量的 Node.js 进程。
console.log('parent pid:' + process.pid);
var fork = require('child_process').fork;
// fork方法返回的是子进程
var child = fork('./child_process_fork_child.js');
console.log('fork return pid:' + child.pid);
child.on('message', (msg) => {
    console.log('parent get message:' + JSON.stringify(msg));
});
child.send({
    key: 'parent value'
});