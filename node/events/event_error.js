const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
// 如果 EventEmitter 没有为 'error' 事件注册至少一个监听器，则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、且退出 Node.js 进程。
// myEmitter.emit('error', new Error('whoops!'));



// 作为最佳实践，应该始终为 'error' 事件注册监听器。

myEmitter.on('error', (err) => {
    console.error('有错误');
});
myEmitter.emit('error', new Error('whoops!'));

