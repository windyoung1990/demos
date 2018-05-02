// cluster 模块允许简单容易的创建共享服务器端口的子进程。
// cluster模块支持两种连接分发模式（将新连接安排给某一工作进程处理）。
// 第一种方法（也是除Windows外所有平台的默认方法），是循环法。由主进程负责监听端口，接收新连接后再将连接循环分发给工作进程。在分发中使用了一些内置技巧防止工作进程任务过载。
// 第二种方法是，主进程创建监听socket后发送给感兴趣的工作进程，由工作进程负责直接接收连接。
// 理论上第二种方法应该是效率最佳的，但在实际情况下，由于操作系统调度机制的难以捉摸，会使分发变得不稳定。我们遇到过这种情况：8个进程中的2个，分担了70%的负载。

const cluster = require('cluster');
const http = require('http');

const numCups = require('os').cpus().length;
// console.log(numCups)
if (cluster.isMaster) {
    console.log(`主进程${process.pid}正在运行`);

    // 衍生工作进程
    for (let i = 0; i < numCups; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程${worker.process.pid}已退出`);
    });
} else {
    // 工作进程可以共享任何TCP连接
    // 在本例子中，共享的是一个HTTP服务器
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);
    console.log(`工作进程 ${process.pid} 已启动`);
}
