// EventEmitter 类由 events 模块定义和开放的：
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// 当新的监听器被添加时，所有的 EventEmitter 会触发 'newListener' 事件

myEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});

myEmitter.on('event', () => {
    console.log('A');
});


myEmitter.emit('event');
// 打印:
//   B
//   A