const buf = Buffer.from('buffer');
// 输出
// 98
// 117
// 102
// 102
// 101
// 114
for(const value of buf.values()) {
    console.log(value);
}
// 输出
// 98
// 117
// 102
// 102
// 101
// 114
for(const value of buf) {
    console.log(value);
}
