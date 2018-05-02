// 使用 eventEmitter.once() 方法时可以注册一个对于特定事件最多被调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// 打印: 1
myEmitter.emit('event');
// 忽略