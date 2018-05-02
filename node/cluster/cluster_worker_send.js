// 主进程调用这个方法会发送消息给具体的工作进程。还有一个等价的方法是ChildProcess.send()。

// 工作进程调用这个方法会发送消息给主进程。还有一个等价方法是process.send()。
var cluster = require('cluster')
if (cluster.isMaster) {
    const worker = cluster.fork();
    worker.send('hi there');
} else if(cluster.isWorker){
    process.on('message', (msg) =>{
        process.send(msg);
    })
}