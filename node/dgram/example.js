// dgram 模块提供了UDP数据包socket的实现
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('error', (err) => {
    console.log(`服务器异常：\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`服务器收到：${msg} 来自 ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`服务器监听 ${address.address}:${address.port}`);
});
server.bind(8888, 'localhost');