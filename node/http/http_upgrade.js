// 每当服务器响应 upgrade 请求时触发。 如果该事件未被监听，则接收到 upgrade 请求头的客户端会关闭连接。
const http = require('http');

// 创建一个HTTP服务器

const srv = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end('okay');
});


srv.on('upgrade', (req, socket, head) => {
    socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
    'Upgrade: WebSocket\r\n' +
    'Connection: Upgrade\r\n' +
    '\r\n');
    socket.pipe(socket);
});

srv.listen(1337, '127.0.0.1', () => {
    // 发送一个请求
    const options = {
        port: 1337,
        hostname: '127.0.0.1',
        headers: {
          'Connection': 'Upgrade',
          'Upgrade': 'websocket'
        }
    };
    const req = http.request(options);
    req.end();
    req.on('upgrade', (res, socket, upgradeHead) => {
        console.log('got upgraded!');
        socket.end();
        process.exit(0);
    });
})