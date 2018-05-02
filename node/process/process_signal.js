// 当Node.js进程接收到一个信号时，会触发信号事件。 signal(7)列出了标准POSIX的信号名称列表，例如SIGINT, SIGHUP等等。
// 每个事件名称，以信号名称的大写表示 (比如事件'SIGINT' 对应信号 SIGINT).

process.stdin.resume();

process.on('SIGINT', () => {
    console.log('Received SIGINT.  Press Control-D to exit.');
})