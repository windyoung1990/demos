const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];
console.log(arr.sort(Buffer.compare));

// buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])#
// 如果 target 与 buf 相同，则返回 0 。
// 如果 target 排在 buf 前面，则返回 1 。
// 如果 target 排在 buf 后面，则返回 -1 。
const buf3 = Buffer.from('ABC');
const buf4 = Buffer.from('BCD');
const buf5 = Buffer.from('ABCD');
// 0
console.log(buf3.compare(buf3));
// -1
console.log(buf3.compare(buf4));
// 1
console.log(buf4.compare(buf3))