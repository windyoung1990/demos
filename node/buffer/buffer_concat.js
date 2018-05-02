const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);

const bufC = Buffer.concat([buf1, buf2, buf3], totalLength);
console.log(bufC);
console.log(bufC.length);