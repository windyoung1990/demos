// 例子：创建两个 Buffer 实例 buf1 与 buf2 ，并拷贝 buf1 中第 16 个至第 19 个字节到 buf2 第 8 个字节起。
const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');
for( var i = 0; i < 26; i++) {
    buf1[i] = i + 97;
}
buf1.copy(buf2, 8 , 16, 20);
console.log(buf2.toString('ascii'))


// 例子：创建一个 Buffer ，并拷贝同一 Buffer 中一个区域的数据到另一个重叠的区域。


const buf = Buffer.allocUnsafe(26);
for(var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
buf.copy(buf, 0, 4, 10);
console.log(buf.toString());//efghijghijklmnopqrstuvwxyz
