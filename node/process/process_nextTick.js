console.log('start');
// process.nextTick()方法将 callback 添加到"next tick 队列"。 一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。
process.nextTick(() => {
    console.log('nextTick callback');
});

console.log('scheduled');