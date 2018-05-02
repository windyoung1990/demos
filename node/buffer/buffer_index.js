// 索引操作符 [index] 可用于获取或设置 buf 中指定 index 位置的八位字节
const str = 'Node.js';
const buf = Buffer.allocUnsafe(str.length);
for(var i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
}
// console.log(buf);
console.log(Buffer.poolSize)
console.log(buf.toString('ascii'));