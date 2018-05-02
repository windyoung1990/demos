const buf1 = Buffer.allocUnsafe(26);
for(let i = 0; i < 26; i++) {
    buf1[i] = i + 97;
}
// 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('ascii'))

// 输出: abcde
console.log(buf1.toString('ascii', 0, 5));

const buf2 = Buffer.from('tést');
// 输出: 74c3a97374
console.log(buf2.toString('hex'))
// 输出: té
console.log(buf2.toString('utf8', 0, 3));

// 输出: té
console.log(buf2.toString(undefined, 0, 3));
