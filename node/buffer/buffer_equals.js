// 如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。
const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243', 'hex');
const buf3 = Buffer.from('ABCD');
// 输出: true
console.log(buf1.equals(buf2));

// 输出: false
console.log(buf1.equals(buf3));