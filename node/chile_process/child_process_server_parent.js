const subprocess = require('child_process').fork('child_process_server_child.js');
// 开启server对象，并发送该句柄
const server = require('net').createServer();
server.on('connection', (socket) => {
    socket.end('被父进程处理');
});
server.listen(3000, () => {
    subprocess.send('server', server);
});