// 通过一个八位字节的 array 创建一个新的 Buffer 。

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

console.log(buf);//<Buffer 62 75 66 66 65 72>
console.log(buf.toString());//buffer
