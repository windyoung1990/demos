// 任何时候Node.js发出进程告警，都会触发'warning'事件。

process.on('warning', (warning) => {
    console.warn(warning.name);    // 打印告警名称
    console.warn(warning.message); // 打印告警信息
    console.warn(warning.stack);   // 打印堆栈信息
});