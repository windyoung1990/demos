process.on('message', (m, server) => {
    console.log('m',m)
    if (m === 'server') {
        server.on('connection',(socket) => {
            socket.write('Echo server\r\n');
            socket.end('被子进程处理');
        })
    }
})