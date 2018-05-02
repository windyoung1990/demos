// 由于长时间运行的服务端连接可能导致工作进程的disconnect方法阻塞，我们可以采用发送消息的方法，让应用采取相应的动作来关闭连接。也可以通过设置timeout，当'disconnect'事件在某段时间后仍没有触发时关闭工作进程。
const cluster = require('cluster');
if (cluster.isMaster) {
    const worker = cluster.fork();
    let timeout;
    worker.on('listening', (address) => {
        worker.send('shutdown');
        worker.disconnect();
        timeout = setTimeout(() => {
            worker.kill();
        }, 2000);
    });
    worker.on('disconnect', () => {
        clearTimeout(timeout);
    });

} else if (cluster.isWorker) {
    const net = require('net');
    const server = net.createServer((socket) => {
        // 连接永远不会结束
    }); 
    server.listen(8000);
    process.on('message', (msg) => {
        if (msg === 'shutdown') {
            // 将所有与服务器的连接优雅关闭
        }
    })
}