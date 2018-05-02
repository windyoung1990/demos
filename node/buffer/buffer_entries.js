// 从 buf 的内容中，创建并返回一个 [index, byte] 形式的迭代器。
const buf = Buffer.from('buffer');

for(const pair of buf.entries()) {
    console.log(pair)
}
// 输出
// [ 0, 98 ]
// [ 1, 117 ]
// [ 2, 102 ]
// [ 3, 102 ]
// [ 4, 101 ]
// [ 5, 114 ]