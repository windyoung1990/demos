// buffer 属性指向创建该 Buffer 的底层的 ArrayBuffer 对象。
const arrayBuffer = new ArrayBuffer(16);
const buf = Buffer.from(arrayBuffer);
console.log(buf.buffer === arrayBuffer);//true