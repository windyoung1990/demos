const buf = Buffer.from('buffer');
// 输出:
//   0
//   1
//   2
//   3
//   4
//   5
for(const key of buf.keys()) {
    console.log(key)
}