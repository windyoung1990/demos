const http = require('http');
const options = {
    host: 'nodejs.cn'
};

const req = http.get(options);
req.end();
req.once('response', (res) => {
    const ip = req.socket.localAddress;
    const port = req.socket.localPort;
    console.log(`你的IP地址是${ip},你的源端口号是：${port}`);
});