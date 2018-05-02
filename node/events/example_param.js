const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// myEmitter.on('event', function(a, b){
    // this 关键词会被设置指向监听器所附加的 EventEmitter。
    // a b MyEmitter {
    //   _events: { event: [Function] },
    //   _eventsCount: 1,
    //   _maxListeners: undefined }
//     console.log(a, b, this);
// });
// myEmitter.emit('event','a', 'b');

// 也可以使用 ES6 的箭头函数作为监听器。但是这样 this 关键词就不再指向 EventEmitter 实例：
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
    // a b {}
});
myEmitter.emit('event','a', 'b');