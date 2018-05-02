// 所有能触发事件的对象都是 EventEmitter 类的实例。 这些对象开放了一个 eventEmitter.on() 函数，允许将一个或多个函数绑定到会被对象触发的命名事件上。 事件名称通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 属性名。
// 当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都被同步地调用。 监听器的返回值会被丢弃。

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('触发了一个事件');
});
myEmitter.emit('event')
