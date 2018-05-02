const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
    // 跟踪http请求
    let numReqs = 0;
    setInterval(() => {
        console.log(`numReqs = ${numReqs}`);
    },1000);
    // 计算请求数目
    function messageHandler(msg) {
        console.log(msg)
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs ++;
        }
    }
  // 启动 worker 并监听包含 notifyRequest 的消息
  const numCpus = require('os').cpus().length;
//   console.log('len:',numCpus);
  for (let i = 0; i < numCpus; i++) {
      cluster.fork();
  }
//   console.log(cluster.workers);
  for (const id in cluster.workers) {
      cluster.workers[id].on('message', messageHandler);
  }
} else {
    // Worker 进程有一个http服务器
    http.Server((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
        // 通知主进程接收到了请求
        process.send({
            cmd: 'notifyRequest'
        })
    }).listen(8000);
}