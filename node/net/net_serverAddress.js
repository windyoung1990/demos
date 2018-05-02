const net = require('net');
const server = net.createServer((socket) => {
    socket.end('goodbye\n');
}).on('error', (err) => {
    throw err;
});

server.listen(() => {
    // 只有到了 'listening' 事件被触发时候.才可以调用 server.address()
    console.log('opened server on', server.address());
});